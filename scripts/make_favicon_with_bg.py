import os
from PIL import Image, ImageDraw

icon_path = r"C:\Users\ShadowBlade\Documents\Projects\CAC\public\icon.png"
if not os.path.exists(icon_path):
    icon_path = r"C:\Users\ShadowBlade\Documents\Projects\CAC\public\cac.png"

im = Image.open(icon_path).convert("RGBA")

# Crop tight alpha bounding box of the logo mark
alpha = im.split()[-1]
bbox = alpha.getbbox()
if bbox:
    icon = im.crop(bbox)
else:
    icon = im

print("Cropped logo mark size:", icon.size)

def generate_favicon(bg_color, filename_suffix="", is_rounded=False):
    w, h = icon.size
    side = max(w, h)
    padding = int(side * 0.18) # 18% padding around logo emblem
    canvas_size = side + padding * 2
    
    # Create base square canvas with solid background color
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    
    if is_rounded:
        corner_radius = int(canvas_size * 0.20)
        draw.rounded_rectangle([0, 0, canvas_size - 1, canvas_size - 1], radius=corner_radius, fill=bg_color)
    else:
        draw.rectangle([0, 0, canvas_size, canvas_size], fill=bg_color)
    
    # Paste logo centered
    paste_x = (canvas_size - w) // 2
    paste_y = (canvas_size - h) // 2
    canvas.paste(icon, (paste_x, paste_y), icon)
    
    # Generate standard resolution outputs
    fav_512 = canvas.resize((512, 512), Image.LANCZOS)
    fav_256 = canvas.resize((256, 256), Image.LANCZOS)
    fav_180 = canvas.resize((180, 180), Image.LANCZOS)
    fav_64  = canvas.resize((64, 64), Image.LANCZOS)
    fav_32  = canvas.resize((32, 32), Image.LANCZOS)
    
    fav_256.save(f"public/favicon{filename_suffix}.png")
    fav_256.save(f"public/favicon{filename_suffix}.webp", "WEBP", quality=95)
    fav_180.save(f"public/apple-touch-icon{filename_suffix}.png")
    fav_180.save(f"public/apple-touch-icon{filename_suffix}.webp", "WEBP", quality=95)
    
    # Multi-resolution ICO format
    fav_512.save(f"public/favicon{filename_suffix}.ico", format="ICO", sizes=[(16,16), (32,32), (48,48), (64,64), (128,128), (256,256)])
    print(f"Saved favicon with background {bg_color} -> public/favicon{filename_suffix}.png, .ico, .webp")

# Primary: Solid Crisp White Background (#FFFFFF) - stands out distinctly in all light/dark browser tabs
generate_favicon((255, 255, 255, 255), filename_suffix="", is_rounded=False)

# Alternative: Solid Deep Executive Navy (#13294B)
generate_favicon((19, 41, 75, 255), filename_suffix="-navy", is_rounded=False)

print("Favicon generation finished successfully!")

