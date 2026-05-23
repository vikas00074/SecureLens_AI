import easyocr

reader = easyocr.Reader(['en'])

def extract_text_from_image(image_path):

    result = reader.readtext(image_path)

    cleaned_result = []

    for item in result:

        bbox = [
            [int(point[0]), int(point[1])]
            for point in item[0]
        ]

        text = str(item[1])

        confidence = float(item[2])

        cleaned_result.append({
            "bbox": bbox,
            "text": text,
            "confidence": confidence
        })

    return cleaned_result