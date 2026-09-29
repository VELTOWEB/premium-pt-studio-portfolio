# KINETIQ — Premium PT Studio Website

VELTOWEB 포트폴리오용으로 제작한 가상의 프리미엄 1:1 퍼스널 트레이닝 스튜디오 웹사이트입니다. 메인 화면에서는 포트폴리오 티를 내지 않고 실제 PT샵 공식 홈페이지처럼 동작하도록 구성했습니다.

## 실행 방법
- 가장 간단한 방법: `index.html`을 더블클릭해 브라우저에서 엽니다.
- 권장: VS Code에서 폴더를 연 뒤 **Live Server**로 `index.html`을 실행합니다.
- 서버 빌드 과정, npm, React는 필요하지 않습니다.

## 페이지
- `index.html` HOME
- `program.html` 프로그램
- `trainers.html` 트레이너
- `facility.html` 시설
- `results.html` 회원 변화
- `membership.html` 이용권
- `about.html` 브랜드
- `contact.html` 문의 / 위치 / FAQ / 상담 폼

## 폴더 구조
```
premium-pt-studio/
├─ index.html
├─ program.html
├─ trainers.html
├─ facility.html
├─ results.html
├─ membership.html
├─ about.html
├─ contact.html
├─ css/
│  ├─ style.css
│  ├─ responsive.css
│  └─ animations.css
├─ js/
│  ├─ config.js
│  ├─ main.js
│  ├─ animations.js
│  ├─ slider.js
│  └─ form.js
├─ images/
│  ├─ hero/
│  ├─ trainers/
│  ├─ facility/
│  ├─ programs/
│  ├─ results/
│  └─ common/
└─ assets/icons/
```

## 브랜드 / 연락처 수정
`js/config.js`의 `SITE_CONFIG` 한 곳에서 전화번호, 카카오톡, Instagram, 주소, 지도 링크를 변경할 수 있습니다. 브랜드명은 HTML에 `KINETIQ`가 직접 들어가 있으므로 VS Code 전체 찾기/바꾸기로 변경하면 가장 빠릅니다.

## 이미지 변경
현재 데모는 브라우저에서 Unsplash 무료 이미지 URL을 불러오고, 네트워크 오류가 나면 `images/` 폴더의 로컬 SVG 플레이스홀더로 자동 대체됩니다. 실제 고객 사이트 제작 시에는 아래처럼 로컬 WebP 파일로 교체하는 것을 권장합니다.
- `images/hero/hero-training.webp` — Hero 운동 장면
- `images/trainers/trainer-do-yoon.webp` 등 — 트레이너 프로필 4장
- `images/facility/facility-main.webp` 등 — 시설 6장
- `images/programs/program-fatloss.webp` 등 — 프로그램 5장
- `images/results/result-01-before.webp`, `result-01-after.webp` — 변화 사례
- `images/common/about-coaching.webp` — 코칭 장면
- `images/common/cta-detail.webp` — CTA 디테일

HTML의 해당 `<img src="...">` 값을 로컬 상대경로로 바꾸면 됩니다. 가능하면 WebP, 1600~2200px 내외, 75~85 품질을 권장합니다.

## 가격 변경
가격은 `index.html`과 `membership.html`의 `₩` 문자열을 검색해서 수정합니다. 실제 운영 시 가격표, VAT, 유효기간, 취소/환불 정책을 반드시 실제 정책에 맞게 교체하세요.

## 상담 Form
`contact.html`의 상담 폼은 프론트엔드 데모입니다. 필수 입력 검증과 완료 Modal은 작동하지만 **실제 서버 전송은 하지 않습니다.** 실제 운영 시 Formspree, Supabase, Firebase, 자체 API 등과 연결하고 개인정보 처리방침 링크를 추가해야 합니다.

## GitHub Pages 배포
1. GitHub Repository에 이 폴더의 파일을 업로드합니다.
2. Repository → Settings → Pages로 이동합니다.
3. Deploy from a branch → `main` / `/root`를 선택합니다.
4. 모든 내부 링크와 CSS/JS는 상대경로라 Project Pages에서도 동작합니다.

## 주요 기능
Sticky/Blur Header, Full Screen Mobile Menu, Scroll Progress, Scroll Reveal, Count Up, 후기 드래그/스와이프, Before/After Slider, Facility Lightbox, FAQ Accordion, 상담 폼 Validation, Success Modal, Scroll To Top, 모바일 Sticky CTA, prefers-reduced-motion 대응.

## 이미지 출처 메모
데모 사진은 Unsplash의 무료 사용 가능 이미지를 참조하도록 구성했습니다. 실제 상업 고객 프로젝트에서는 최종 사용 이미지의 라이선스와 초상권을 별도로 확인하세요.
