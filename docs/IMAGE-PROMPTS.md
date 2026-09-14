# Prompt tạo hình ảnh Dâu Dâu

Các hình trong tài liệu này được tạo bằng công cụ ImageGen tích hợp. Đây là hình định hướng mỹ thuật, chưa mặc định là hình cuối cùng được xuất bản.

## Hero concept v1

File: `assets/images/concepts/hero-concept-v1.png`

```text
Use case: photorealistic-natural
Asset type: wide landing-page hero image for a small Vietnamese fresh-flower studio
Primary request: Create a cinematic, emotionally warm floral scene for Dâu Dâu, a cute yet gentle neighborhood flower shop. The image should feel lively, handcrafted, approachable, and premium enough for an editorial website without looking like a luxury corporate brand.
Scene/backdrop: soft warm cream studio backdrop with subtle natural botanical shadows and airy depth
Subject: layered fresh pink roses, chrysanthemums, orchids, and lilies, arranged loosely and naturally; a few petals and leaves in foreground and background to create parallax-ready depth
Style/medium: highly photorealistic editorial flower photography, realistic Vietnamese neighborhood florist sensibility, delicate natural imperfections
Composition/framing: very wide cinematic composition, main floral cluster weighted toward the right and lower-right, generous clean negative space on the left and upper-left for website headline; clear foreground, middle ground, and background layers
Lighting/mood: early-morning window light, gentle, tender, optimistic, fresh
Color palette: lotus-petal magenta pink as the accent, warm cream, natural leaf green, tiny restrained burgundy notes
Materials/textures: fresh petals with realistic veins and moisture, matte leaves, subtle paper wrap, no glossy artificial flowers
Constraints: no text, no logo, no watermark, no people, no hands, no vase labels, no religious symbols, no church, no altar; do not make it look like a product catalog or a specific bouquet for sale
Avoid: oversaturated neon colors, plastic-looking petals, symmetry, dark dramatic funeral mood, busy background, excessive empty objects
```

## Hands concept v1

File: `assets/images/concepts/hands-concept-v1.png`

```text
Use case: photorealistic-natural
Asset type: storytelling image for the “Duyên của Dâu với hoa” section of a Vietnamese flower-shop landing page
Primary request: Create an intimate, candid scene of a florist's hands gently arranging fresh flowers, communicating warmth, care, patience, and handmade craft. The person represents the act of making but must not pretend to be the real owner.
Scene/backdrop: small welcoming flower worktable near a window, warm cream wall, a few natural tools and kraft paper kept subtle
Subject: only a pair of natural adult Vietnamese woman's hands arranging pink roses, chrysanthemums, orchids, and lilies; stems and leaves visibly handled with care
Style/medium: highly photorealistic natural editorial lifestyle photography, authentic and unposed, refined but not luxurious
Composition/framing: horizontal medium close-up, hands and flowers in the right-center, usable negative space on the left for story copy; layered flowers at different depths
Lighting/mood: soft daylight, tender, calm, quietly joyful, intimate
Color palette: lotus-petal magenta accent, blush pink, warm cream, fresh green, restrained burgundy
Materials/textures: realistic skin, natural petal texture, kraft paper, linen apron edge without branding, slightly imperfect worktable
Constraints: hands only; crop above the forearms; no face, no identifiable person, no jewelry branding, no text, no logo, no watermark, no religious symbols, no finished product price tag
Avoid: extra fingers, malformed hands, overly manicured fashion pose, sterile commercial studio, artificial flowers, heavy makeup cues, dark mood
```

## Hands concept v2 — chỉnh tuổi và làn da

File: `assets/images/concepts/hands-concept-v2.png`

Ảnh v1 là mục tiêu chỉnh sửa. Công cụ ImageGen tích hợp được yêu cầu chỉ thay đổi đôi bàn tay và cẳng tay; giữ nguyên hoa, ánh sáng, bố cục và bối cảnh.

```text
Use case: precise-object-edit
Asset type: storytelling image for the “Duyên của Dâu với hoa” section
Primary request: Change only the visible hands and forearms so they clearly look like the natural hands of a young Vietnamese woman about 25 years old. Give the skin a youthful, soft, smooth appearance with subtle natural texture, gentle fullness, and no age-related wrinkles or prominent veins. Keep the hands realistic, unretouched-looking, and actively arranging the flowers.
Invariants: preserve the exact flowers, flower placement, table, scissors, kraft paper, window, background, lighting, color palette, camera angle, crop, composition, clothing, and all other objects. Preserve two anatomically correct hands with five fingers each and the same working gestures. Do not add a face or identify the person.
Avoid: elderly-looking skin, wrinkled hands, prominent veins, plastic skin, beauty-advertising gloss, exaggerated manicure, long nails, jewelry, extra fingers, malformed anatomy, text, logo, watermark.
```

## Everyday flowers v1

File: `assets/images/concepts/everyday-flowers-v1.png`

```text
Use case: photorealistic-natural
Asset type: “Hoa cho những ngày thật gần” section image
Input images: hero v1 and hands v2 used only as references for palette, warm daylight, natural texture, and editorial realism; generate a new scene
Primary request: a welcoming collection of several small, affordable-looking fresh flower vases and hand-tied mini bouquets ready for a customer to pick up from a friendly neighborhood florist
Scene/backdrop: warm cream corner of a small Vietnamese flower shop, simple wooden surface, airy and uncluttered
Subject: small arrangements featuring pink roses, chrysanthemums, lilies and a restrained orchid accent, varied heights and natural imperfect stems
Style/medium: highly photorealistic candid editorial photography, approachable and handmade, not luxury retail
Composition/framing: horizontal composition with arrangements concentrated left and center, clean negative space on the right for copy, clear depth layers
Lighting/mood: fresh morning window light, cheerful, gentle, convenient, everyday beauty
Color palette: lotus-petal magenta accent, blush pink, warm cream, natural green
Constraints: no people, no text, no logo, no watermark, no price tags, no religious symbols, no altar, no branded packaging; do not imply these are actual products made by Dâu
Avoid: extravagant wedding scale, hotel-lobby luxury, artificial flowers, clutter, oversaturation
```

## Gift bouquet v1

File: `assets/images/concepts/gift-bouquet-v1.png`

```text
Use case: photorealistic-natural
Asset type: “Hoa để gửi trao” gift-bouquet section image
Input images: hero v1 and hands v2 used only as references for palette, warm daylight, natural texture, and editorial realism; generate a new scene
Primary request: an intimate emotional moment of a fresh bouquet being gently offered from one pair of youthful hands toward another pair of hands, with no faces visible
Scene/backdrop: soft cream and blush environment near a sunlit doorway, minimal background
Subject: medium hand-tied bouquet of pink roses, chrysanthemums and delicate greenery, wrapped in understated kraft paper; hands natural and anatomically correct
Style/medium: photorealistic lifestyle editorial photography, sincere, warm, local and approachable
Composition/framing: horizontal close-up, bouquet centered slightly right, generous negative space left for story copy, crop all people above forearms
Lighting/mood: soft golden daylight, affectionate, grateful, tender
Color palette: lotus-petal magenta, blush, cream, leaf green
Constraints: no faces, no identifiable people, no text, no logo, no watermark, no price, no wedding dress, no religious symbols; five fingers per hand, realistic anatomy
Avoid: posed advertising smiles, luxury packaging, huge bouquet, plastic skin, extra fingers, artificial flowers
```

## Wedding and event v1

File: `assets/images/concepts/wedding-event-v1.png`

```text
Use case: photorealistic-natural
Asset type: wedding and event flower section image
Input images: hero v1 and hands v2 used only as references for palette, warm daylight, natural texture, and editorial realism; generate a new scene
Primary request: a refined but intimate wedding-and-small-event floral detail that a neighborhood florist could realistically create
Scene/backdrop: simple cream fabric backdrop and a small celebration table edge, no grand venue
Subject: elegant loose arrangement with blush roses, white and pink lilies, a few orchids, chrysanthemums and greenery; one subtle ribbon detail
Style/medium: highly photorealistic editorial event photography, graceful and handcrafted rather than luxurious
Composition/framing: horizontal, floral detail on the left and center with usable negative space on the right; shallow depth of field
Lighting/mood: soft natural daylight, hopeful, celebratory, delicate
Color palette: blush, lotus pink, warm cream, leaf green, tiny burgundy accent
Constraints: no people, no text, no logo, no watermark, no branded decor, no extravagant ballroom, no price tag
Avoid: oversized luxury installation, artificial flowers, pure-white sterile studio, glitter, neon colors
```

## Condolence v1

File: `assets/images/concepts/condolence-v1.png`

```text
Use case: photorealistic-natural
Asset type: respectful condolence-flower section image
Input images: hero v1 and hands v2 used only as references for realism and botanical texture; generate a new scene while shifting the tone to quiet respect
Primary request: a dignified, restrained condolence floral arrangement expressing sympathy and care, suitable for a small local florist
Scene/backdrop: calm warm-neutral background with soft natural shadow, no funeral venue
Subject: tasteful arrangement of white lilies, pale chrysanthemums, soft cream roses and deep green leaves, with only a very small muted pink accent
Style/medium: highly photorealistic editorial floral photography, natural and handcrafted
Composition/framing: horizontal arrangement placed to the right with generous quiet negative space on the left for respectful copy
Lighting/mood: soft diffused daylight, serene, compassionate, dignified, not dark or frightening
Color palette: white, ivory, muted blush, deep natural green, warm taupe
Constraints: no people, no text, no logo, no watermark, no cross, no altar, no coffin, no candles, no religious symbol, no ribbon text, no price tag
Avoid: celebratory mood, bright saturated pink, luxury funeral hall, morbidity, artificial flowers
```

## Devotional flowers v1

File: `assets/images/concepts/devotional-flowers-v1.png`

```text
Use case: photorealistic-natural
Asset type: “Hoa dâng Chúa” section image
Input images: hero v1 and hands v2 used only as references for palette, daylight, natural texture, and editorial realism; generate a new scene
Primary request: a serene, carefully arranged floral still life communicating reverence, cleanliness, and thoughtful preparation without depicting any religious place or symbol
Scene/backdrop: luminous warm cream background with soft window light and subtle botanical shadow
Subject: balanced arrangement of white and pale pink lilies, orchids and chrysanthemums with fresh green leaves, natural and modest scale
Style/medium: highly photorealistic fine-art editorial floral photography, handcrafted and respectful
Composition/framing: horizontal, flowers concentrated left and lower-left with peaceful negative space on the right for copy; simple vessel without decoration
Lighting/mood: pure gentle morning light, calm, devotional, dignified
Color palette: ivory, white, pale lotus pink, fresh green, a restrained magenta detail linking to Dâu Dâu
Constraints: no people, no text, no logo, no watermark, no church, no altar, no cross, no statue, no candles, no rosary, no religious iconography, no price tag
Avoid: wedding mood, funeral darkness, lavish luxury arrangement, artificial flowers, excessive ornament
```

## Zalo CTA v1

File: `assets/images/concepts/zalo-cta-v1.png`

```text
Use case: photorealistic-natural
Asset type: final Zalo call-to-action background image
Input images: hero v1 and hands v2 used only as references for palette, warm daylight, natural texture, and editorial realism; generate a new scene
Primary request: a simple charming small fresh flower vase that visually supports the message “a little vase from 60,000 VND” without showing any price or pretending to be a real catalog item
Scene/backdrop: warm cream tabletop and softly lit wall with subtle leaf shadow
Subject: one modest small vase containing a few pink roses, chrysanthemums, a lily bud and natural greenery; delicate loose arrangement
Style/medium: highly photorealistic editorial still-life photography, cute, gentle, accessible, neighborhood florist feeling
Composition/framing: very wide horizontal composition, vase placed on the far right, abundant clean negative space across the left and center for CTA copy and buttons
Lighting/mood: warm late-afternoon natural light, welcoming, hopeful, personal
Color palette: lotus-petal magenta accent, blush, cream, natural green
Constraints: no text, no logo, no watermark, no price tag, no phone, no chat bubbles, no people, no religious symbols, no branded vase
Avoid: expensive luxury bouquet, dense background, artificial flowers, oversaturated pink, product-catalog labels
```
