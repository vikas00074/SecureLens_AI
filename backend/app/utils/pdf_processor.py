import fitz
from PIL import Image
import os

def convert_pdf_to_images(pdf_path):

    doc = fitz.open(pdf_path)

    image_paths = []

    for page_num in range(len(doc)):

        page = doc.load_page(page_num)

        pix = page.get_pixmap()

        image_path = f"uploads/page_{page_num}.png"

        pix.save(image_path)

        image_paths.append(image_path)

    return image_paths