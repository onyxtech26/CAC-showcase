import os
import glob
from PIL import Image

brain_dir = r"C:\Users\ShadowBlade\.gemini\antigravity-cli\brain\14614a09-88db-47b2-af23-ab78b298dd0a"
out_dir = r"C:\Users\ShadowBlade\Documents\Projects\CAC\public\assets"

steps = [
    ("process_step_1_consultation_3d", "process-step-1-3d.webp"),
    ("process_step_2_evidence_3d", "process-step-2-3d.webp"),
    ("process_step_3_historical_3d", "process-step-3-3d.webp"),
    ("process_step_4_analysis_3d", "process-step-4-3d.webp"),
    ("process_step_5_report_3d", "process-step-5-3d.webp"),
    ("process_step_6_legal_3d", "process-step-6-3d.webp"),
    ("process_step_7_resolution_3d", "process-step-7-3d.webp"),
    ("process_step_8_sale_3d", "process-step-8-3d.webp"),
]

# Check if rembg is available
use_rembg = False
try:
    from rembg import remove
    use_rembg = True
    print("Using rembg for background removal...")
except Exception as e:
    print("rembg not available, using smart luminance keying...", e)

for pattern, out_filename in steps:
    files = glob.glob(os.path.join(brain_dir, f"{pattern}*.jpg"))
    if not files:
        files = glob.glob(os.path.join(brain_dir, f"{pattern}*.png"))
    if not files:
        print(f"File not found for pattern {pattern}")
        continue
    
    src_file = files[0]
    print(f"Processing {src_file} -> {out_filename}")
    
    img = Image.open(src_file).convert("RGBA")
    
    if use_rembg:
        try:
            with open(src_file, 'rb') as i:
                input_data = i.read()
                output_data = remove(input_data)
                out_path_png = os.path.join(out_dir, out_filename.replace('.webp', '.png'))
                with open(out_path_png, 'wb') as o:
                    o.write(output_data)
                img = Image.open(out_path_png).convert("RGBA")
        except Exception as err:
            print("rembg error, fallbacking:", err)
    
    # Also do smart luminance keying if background is dark/black to make pure black transparent with smooth alpha falloff
    datas = img.getdata()
    newData = []
    for item in datas:
        r, g, b, a = item
        # Luminance on dark pixels
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        if use_rembg:
            newData.append(item)
        else:
            # Black background removal with smooth feathering threshold
            if lum < 25:
                alpha = int((lum / 25.0) * a)
                newData.append((r, g, b, alpha))
            else:
                newData.append(item)
                
    img.putdata(newData)
    out_path_webp = os.path.join(out_dir, out_filename)
    img.save(out_path_webp, "WEBP", quality=90)
    print(f"Saved {out_path_webp}")

print("Done processing process step icons!")
