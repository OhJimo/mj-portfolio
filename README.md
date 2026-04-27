# mj-portfolio

개인 포트폴리오 사이트.

## 개요

차분하고 성찰적인 톤의 1페이지 에디토리얼 포트폴리오. 여러 현장과 창작 경험을 거쳐온 흐름을 6개 섹션으로 정리한다.

## 기술 스택

- **빌드**: Vite + React 19 + TypeScript
- **스타일**: Tailwind CSS v4 + shadcn/ui
- **폰트**:
  - 본문 — Pretendard Variable (npm `pretendard`)
  - 헤딩 — S-Core Dream (jsdelivr CDN)
  - 강조 — Maruburi (npm `@kfonts/maruburi`)
- **아이콘**: Phosphor Icons
- **배포**: GitHub Pages (https://OhJimo.github.io/mj-portfolio/)

## 구조

```
docs/
  레퍼런스/                  # 참고 이미지 (구현 가이드 아님, 분위기 참고용)
  사이트 기획 문서/
    디자인 문서.md           # 디자인 결정·토큰·섹션별 디렉션
    메인 페이지 카피 초안.md  # 섹션별 본문 카피
    사이트 섹션 기획 문서.md  # 섹션 구조 초기 기획
  포폴 문서/                 # 통합 포트폴리오 원자료
src/
  App.tsx                    # 메인 셸 (섹션 앵커)
  index.css                  # 디자인 토큰
  components/ui/             # shadcn 컴포넌트
```

## 개발

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성
npm run lint
```

## 배포 (GitHub Pages)

`vite.config.ts`의 `base: "/mj-portfolio/"` 설정으로 자산 경로 처리됨.

배포 흐름은 추후 GitHub Actions 워크플로우로 자동화 예정.
