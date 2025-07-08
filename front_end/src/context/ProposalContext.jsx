import { createContext, useContext, useState, useEffect } from 'react'

const ProposalContext = createContext()

export const ProposalProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem("proposalData")
      return stored ? JSON.parse(stored) : getInitialData()
    } catch {
      return getInitialData()
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem("proposalData", JSON.stringify(data))
    } catch (err) {
      console.error("❌ Gagal menyimpan ke localStorage:", err)
    }
  }, [data])

  const updateSection = (section, value) => {
    setData(prev => ({
      ...prev,
      [section]: value
    }))
  }

  return (
    <ProposalContext.Provider value={{ data, updateSection }}>
      {children}
    </ProposalContext.Provider>
  )
}

export const useProposal = () => useContext(ProposalContext)

function getInitialData() {
  return {
    cover: {
      judul: '',
      subjudul: '',
      pembimbing: '',
      penyusun: [''],
      sekolah: '',
      alamat: '',
      logo_path: ''
    },
    intro: {
      kataPengantar: '',
      tempatTanggal: '',
      penulis: ''
    },
    toc: [],
    content: {},
    references: ['']
  }
}
