import pdfkit
import os

# Path ke executable wkhtmltopdf
wkhtml_path = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'

config = pdfkit.configuration(wkhtmltopdf=wkhtml_path)

def generate_pdf_from_html(html_string, output_path):
    pdfkit.from_string(html_string, output_path, configuration=config)
