import pdfkit
import os

# Path ke wkhtmltopdf (pastikan sesuai di komputer lo)
wkhtml_path = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'

# Konfigurasi pdfkit pakai wkhtmltopdf
config = pdfkit.configuration(wkhtmltopdf=wkhtml_path)

# Fungsi untuk generate PDF dari string HTML
def generate_pdf_from_html(html_string, output_path):
    pdfkit.from_string(
        html_string,
        output_path,
        configuration=config,
        options={
            'enable-local-file-access': '',  # ✅ WAJIB! Biar bisa akses logo dari local file
        }
    )
