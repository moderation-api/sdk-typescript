# Changelog

## 4.1.1 (2026-05-13)

Full Changelog: [v4.1.0...v4.1.1](https://github.com/moderation-api/sdk-typescript/compare/v4.1.0...v4.1.1)

## 4.1.0 (2026-05-08)

Full Changelog: [v4.0.0...v4.1.0](https://github.com/moderation-api/sdk-typescript/compare/v4.0.0...v4.1.0)

### Features

* **api:** api update ([674c72f](https://github.com/moderation-api/sdk-typescript/commit/674c72f07e85eae2f508ebcbbb9bce5951b6c1b6))

## 4.0.0 (2026-05-08)

Full Changelog: [v3.16.0...v4.0.0](https://github.com/moderation-api/sdk-typescript/compare/v3.16.0...v4.0.0)

### ⚠ BREAKING CHANGES

* **webhooks:** WebhookType and WebhookPayload exports removed in favor of WebhookEvent. Event type strings change from SCREAMING_SNAKE (QUEUE_ITEM_ACTION) to dot.notation (queue_item.action). Payload envelope changes from flat (event.item / event.queue / event.action) to wrapped (event.data.object). The QUEUE_ITEM_NEW event no longer exists; five new author.* events are emitted instead.

### Features

* **api:** api update ([3effeec](https://github.com/moderation-api/sdk-typescript/commit/3effeec4ff4be48ac6d8c2e6ecaaaa888e8c95ef))
* **api:** manual updates ([a298af3](https://github.com/moderation-api/sdk-typescript/commit/a298af3d46c5723271f6804b0f5b1e49ce12fa07))
* **webhooks:** switch to generated v2 WebhookEvent types ([#31](https://github.com/moderation-api/sdk-typescript/issues/31)) ([de99ac4](https://github.com/moderation-api/sdk-typescript/commit/de99ac49b6da7ae30350e73476dab66414c22d23))


### Chores

* redact api-key headers in debug logs ([076c3c6](https://github.com/moderation-api/sdk-typescript/commit/076c3c657af867b229740f3226927d95a7453b8c))

## 3.16.0 (2026-05-06)

Full Changelog: [v3.15.0...v3.16.0](https://github.com/moderation-api/sdk-typescript/compare/v3.15.0...v3.16.0)

### Features

* **api:** api update ([dca0645](https://github.com/moderation-api/sdk-typescript/commit/dca06453ca8d742d93910e8632a1ec99255fad7a))

## 3.15.0 (2026-04-29)

Full Changelog: [v3.14.0...v3.15.0](https://github.com/moderation-api/sdk-typescript/compare/v3.14.0...v3.15.0)

### Features

* **api:** api update ([f09ed6a](https://github.com/moderation-api/sdk-typescript/commit/f09ed6abb7093765677d7497f7cc83676d7fe07f))


### Chores

* **format:** run eslint and prettier separately ([2358577](https://github.com/moderation-api/sdk-typescript/commit/2358577402d7d84c9d02df7faf21b2ab2db22a0d))

## 3.14.0 (2026-04-28)

Full Changelog: [v3.13.1...v3.14.0](https://github.com/moderation-api/sdk-typescript/compare/v3.13.1...v3.14.0)

### Features

* support setting headers via env ([af2db72](https://github.com/moderation-api/sdk-typescript/commit/af2db7255cb3210158674b087ed07957f30490db))


### Chores

* **internal:** codegen related update ([c2ec904](https://github.com/moderation-api/sdk-typescript/commit/c2ec9040fdbd065d999b5089f974f42c9b1a0ac3))

## 3.13.1 (2026-04-27)

Full Changelog: [v3.13.0...v3.13.1](https://github.com/moderation-api/sdk-typescript/compare/v3.13.0...v3.13.1)

### Chores

* update SDK settings ([ebd9ee9](https://github.com/moderation-api/sdk-typescript/commit/ebd9ee9dd41d82260caaf891f8078972fd36c2a4))

## 3.13.0 (2026-04-24)

Full Changelog: [v3.12.1...v3.13.0](https://github.com/moderation-api/sdk-typescript/compare/v3.12.1...v3.13.0)

### Features

* **api:** api update ([fd09d48](https://github.com/moderation-api/sdk-typescript/commit/fd09d48abd824b911ad109a54da98d9a983b7c77))


### Chores

* **internal:** codegen related update ([19833a8](https://github.com/moderation-api/sdk-typescript/commit/19833a854de66b0a52a27fda2cbd9695296f171d))
* **internal:** more robust bootstrap script ([2107963](https://github.com/moderation-api/sdk-typescript/commit/2107963ef7f5394e6dcfad63ff23dcb61d665796))
* update SDK settings ([52a362d](https://github.com/moderation-api/sdk-typescript/commit/52a362dac26f31f3d6e12b4bbd22226c0a85c21c))

## 3.12.1 (2026-04-04)

Full Changelog: [v3.12.0...v3.12.1](https://github.com/moderation-api/sdk-typescript/compare/v3.12.0...v3.12.1)

### Chores

* update SDK settings ([4ff7a0f](https://github.com/moderation-api/sdk-typescript/commit/4ff7a0f55d1416ffcd1b47d729f6a4608ba30f6b))

## 3.12.0 (2026-03-31)

Full Changelog: [v3.11.0...v3.12.0](https://github.com/moderation-api/sdk-typescript/compare/v3.11.0...v3.12.0)

### Features

* **api:** api update ([85ebcb3](https://github.com/moderation-api/sdk-typescript/commit/85ebcb3f0774693fd257bc4fbeba709e679851a2))


### Chores

* **ci:** skip lint on metadata-only changes ([8a7f082](https://github.com/moderation-api/sdk-typescript/commit/8a7f08215c7f396abb0b1e92012673ec99bdb44b))
* **internal:** tweak CI branches ([8ea5928](https://github.com/moderation-api/sdk-typescript/commit/8ea5928908f3b5f9feb86a6e72672936e14fe277))
* **internal:** update gitignore ([293a667](https://github.com/moderation-api/sdk-typescript/commit/293a66760ef5eebaa8e7558c74b339aaa38b8988))

## 3.11.0 (2026-03-16)

Full Changelog: [v3.10.1...v3.11.0](https://github.com/moderation-api/sdk-typescript/compare/v3.10.1...v3.11.0)

### Features

* **api:** api update ([da163a0](https://github.com/moderation-api/sdk-typescript/commit/da163a01c2f3e4d08625df81cb66fe055aefcf40))


### Chores

* **internal:** update dependencies to address dependabot vulnerabilities ([4531b71](https://github.com/moderation-api/sdk-typescript/commit/4531b714dc1d2e66181d4fdcb01d83a30ccbc845))

## 3.10.1 (2026-03-07)

Full Changelog: [v3.10.0...v3.10.1](https://github.com/moderation-api/sdk-typescript/compare/v3.10.0...v3.10.1)

### Bug Fixes

* **client:** preserve URL params already embedded in path ([26d93e7](https://github.com/moderation-api/sdk-typescript/commit/26d93e75196f31bcdad42cf1a9c4deef12f3c655))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([8dc36f8](https://github.com/moderation-api/sdk-typescript/commit/8dc36f8527e1890bd8316a90a3bc7d596fe73814))
* **internal:** codegen related update ([2f33e22](https://github.com/moderation-api/sdk-typescript/commit/2f33e2218ccd459a94bfedc3132b4e933a6e4625))

## 3.10.0 (2026-03-03)

Full Changelog: [v3.9.1...v3.10.0](https://github.com/moderation-api/sdk-typescript/compare/v3.9.1...v3.10.0)

### Features

* **api:** api update ([1cca559](https://github.com/moderation-api/sdk-typescript/commit/1cca55994c701afe1832ed3fcf872beb12ff7c85))


### Chores

* **internal:** move stringifyQuery implementation to internal function ([7b4ca4e](https://github.com/moderation-api/sdk-typescript/commit/7b4ca4e410fc7a6624417e94e527971132ea9015))

## 3.9.1 (2026-02-24)

Full Changelog: [v3.9.0...v3.9.1](https://github.com/moderation-api/sdk-typescript/compare/v3.9.0...v3.9.1)

### Bug Fixes

* **docs/contributing:** correct pnpm link command ([4ab2e78](https://github.com/moderation-api/sdk-typescript/commit/4ab2e78bd4ac1a0e3bdbd2048888645313789e23))


### Chores

* **internal:** upgrade pnpm version ([22088ce](https://github.com/moderation-api/sdk-typescript/commit/22088ceda763628dc9060eed8edb23a320631cba))

## 3.9.0 (2026-02-23)

Full Changelog: [v3.8.1...v3.9.0](https://github.com/moderation-api/sdk-typescript/compare/v3.8.1...v3.9.0)

### Features

* **api:** api update ([c26694e](https://github.com/moderation-api/sdk-typescript/commit/c26694e89c2a22c6ecf53d54c33c61cfdbd4d1a6))

## 3.8.1 (2026-02-20)

Full Changelog: [v3.8.0...v3.8.1](https://github.com/moderation-api/sdk-typescript/compare/v3.8.0...v3.8.1)

### Chores

* update mock server docs ([fe6b3f8](https://github.com/moderation-api/sdk-typescript/commit/fe6b3f863b4a50cafcd6ac18835d73ff9845873f))

## 3.8.0 (2026-02-20)

Full Changelog: [v3.7.0...v3.8.0](https://github.com/moderation-api/sdk-typescript/compare/v3.7.0...v3.8.0)

### Features

* **api:** api update ([4742909](https://github.com/moderation-api/sdk-typescript/commit/47429093b8576bf96eee092449ae866ae1821841))


### Chores

* **internal/client:** fix form-urlencoded requests ([c07bcbb](https://github.com/moderation-api/sdk-typescript/commit/c07bcbbe7561c3816adafe4180b50fe6b0515c79))
* **internal:** avoid type checking errors with ts-reset ([673f28f](https://github.com/moderation-api/sdk-typescript/commit/673f28f00d2d48465efd5781bee9eb7ff13a8c9b))
* **internal:** remove mock server code ([e03c0a1](https://github.com/moderation-api/sdk-typescript/commit/e03c0a1210fd74de39e041843533daf75ee2cc64))

## 3.7.0 (2026-02-06)

Full Changelog: [v3.6.2...v3.7.0](https://github.com/moderation-api/sdk-typescript/compare/v3.6.2...v3.7.0)

### Features

* **api:** api update ([3db3b85](https://github.com/moderation-api/sdk-typescript/commit/3db3b850be82ad738e8deaa7f003a4a05638da0d))


### Chores

* **internal:** upgrade pnpm ([9904b8a](https://github.com/moderation-api/sdk-typescript/commit/9904b8ad2131a92a2b3c822f5d8f43075fc58bc3))

## 3.6.2 (2026-02-06)

Full Changelog: [v3.6.1...v3.6.2](https://github.com/moderation-api/sdk-typescript/compare/v3.6.1...v3.6.2)

### Bug Fixes

* **client:** avoid removing abort listener too early ([1d89cb2](https://github.com/moderation-api/sdk-typescript/commit/1d89cb27203faa83ff1709b03d0ec9b44003d510))


### Chores

* **client:** do not parse responses with empty content-length ([532f911](https://github.com/moderation-api/sdk-typescript/commit/532f9110239e90c4230ed122a89756719d588b66))
* **client:** restructure abort controller binding ([78d4ba7](https://github.com/moderation-api/sdk-typescript/commit/78d4ba7ae247a74c4e275db1874249badb11dc02))

## 3.6.1 (2026-02-03)

Full Changelog: [v3.6.0...v3.6.1](https://github.com/moderation-api/sdk-typescript/compare/v3.6.0...v3.6.1)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([16bb0cb](https://github.com/moderation-api/sdk-typescript/commit/16bb0cb77d8f78f97c2bfebd8abc5f31ae90c523))

## 3.6.0 (2026-01-28)

Full Changelog: [v3.5.0...v3.6.0](https://github.com/moderation-api/sdk-typescript/compare/v3.5.0...v3.6.0)

### Features

* **api:** api update ([638f1ba](https://github.com/moderation-api/sdk-typescript/commit/638f1baff43890ab096c141ae97bbc5eb33f8a49))

## 3.5.0 (2026-01-28)

Full Changelog: [v3.4.0...v3.5.0](https://github.com/moderation-api/sdk-typescript/compare/v3.4.0...v3.5.0)

### Features

* **api:** api update ([bbc8fe4](https://github.com/moderation-api/sdk-typescript/commit/bbc8fe417c72f507a2ae1f3503ef5de69b398e98))


### Chores

* **ci:** upgrade `actions/github-script` ([a249d9b](https://github.com/moderation-api/sdk-typescript/commit/a249d9b283168184021dd1d0a25f70a5d6a9a12a))
* **internal:** update `actions/checkout` version ([98a1367](https://github.com/moderation-api/sdk-typescript/commit/98a13678dfdc2e39dfc46b9cadc002aa1c351769))
* **internal:** update lock file ([cc807ab](https://github.com/moderation-api/sdk-typescript/commit/cc807abac5e3838b6ac52f7facbf192eb04c266d))
* **internal:** upgrade babel, qs, js-yaml ([295fc21](https://github.com/moderation-api/sdk-typescript/commit/295fc21f12ee0b0cdbc66378108b6e6141057da6))
* **internal:** upgrade brace-expansion and @babel/helpers ([3b2fd71](https://github.com/moderation-api/sdk-typescript/commit/3b2fd71abc858b2ce07f0711340eb8c72b14e04c))

## 3.4.0 (2026-01-10)

Full Changelog: [v3.3.0...v3.4.0](https://github.com/moderation-api/sdk-typescript/compare/v3.3.0...v3.4.0)

### Features

* **api:** api update ([f718a30](https://github.com/moderation-api/sdk-typescript/commit/f718a30f25777e7b60eb43fdf8624e35c197d840))


### Chores

* break long lines in snippets into multiline ([92f3b55](https://github.com/moderation-api/sdk-typescript/commit/92f3b55a251e534868c57f21389d764e06fc0d14))

## 3.3.0 (2026-01-02)

Full Changelog: [v3.2.0...v3.3.0](https://github.com/moderation-api/sdk-typescript/compare/v3.2.0...v3.3.0)

### Features

* **api:** api update ([bcb896b](https://github.com/moderation-api/sdk-typescript/commit/bcb896b3a9f4231fce398aa20409d7b967581cde))

## 3.2.0 (2025-12-18)

Full Changelog: [v3.1.1...v3.2.0](https://github.com/moderation-api/sdk-typescript/compare/v3.1.1...v3.2.0)

### Features

* **api:** api update ([e103536](https://github.com/moderation-api/sdk-typescript/commit/e10353676695f703133ce3203ae47138ec706f81))

## 3.1.1 (2025-12-09)

Full Changelog: [v3.1.0...v3.1.1](https://github.com/moderation-api/sdk-typescript/compare/v3.1.0...v3.1.1)

### Chores

* **internal:** escape package name in pnpm workspace file ([c94f331](https://github.com/moderation-api/sdk-typescript/commit/c94f3319e525dd0d969e69a2a20639c035562c1e))

## 3.1.0 (2025-12-06)

Full Changelog: [v3.0.1...v3.1.0](https://github.com/moderation-api/sdk-typescript/compare/v3.0.1...v3.1.0)

### Features

* **api:** api update ([6fef6a6](https://github.com/moderation-api/sdk-typescript/commit/6fef6a6f20baf41b9373a495f36c0c02d94be6aa))

## 3.0.1 (2025-12-06)

Full Changelog: [v3.0.0...v3.0.1](https://github.com/moderation-api/sdk-typescript/compare/v3.0.0...v3.0.1)

### Bug Fixes

* expose webhook helpers on client ([ebd635f](https://github.com/moderation-api/sdk-typescript/commit/ebd635f4c29d68966145bbc192f98a64180204c7))
* expose webhooks on client ([b444d76](https://github.com/moderation-api/sdk-typescript/commit/b444d76aaac14c375b71217d588e27a41dc9b119))

## 3.0.0 (2025-12-05)

Full Changelog: [v0.1.0...v3.0.0](https://github.com/moderation-api/sdk-typescript/compare/v0.1.0...v3.0.0)

## 0.1.0 (2025-12-05)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/moderation-api/sdk-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** api update ([7bd20e4](https://github.com/moderation-api/sdk-typescript/commit/7bd20e42ff7bc571ecd013eaf10ee2ad25e0d1b1))
* **api:** api update ([ff6a84a](https://github.com/moderation-api/sdk-typescript/commit/ff6a84a85c20d768ea1f03c29e25b0352fe06d2f))
* **api:** api update ([891e56b](https://github.com/moderation-api/sdk-typescript/commit/891e56b6b1ffa15ab069b8da7cb8273f78058477))
* **api:** manual updates ([09d8ad2](https://github.com/moderation-api/sdk-typescript/commit/09d8ad2fb840836343b3fc65091cbf0db4b5b4d6))
* **api:** manual updates ([1b9d189](https://github.com/moderation-api/sdk-typescript/commit/1b9d1896c6b86e7ae0603b25ea1926db1c2f5338))
* **api:** manual updates ([1340a89](https://github.com/moderation-api/sdk-typescript/commit/1340a892869b81bacad6afb1227f037f5a91187c))
* **api:** manual updates ([1882f3b](https://github.com/moderation-api/sdk-typescript/commit/1882f3b0447d526fea5be13cbee39db95540e755))
* **api:** manual updates ([7ca3a0e](https://github.com/moderation-api/sdk-typescript/commit/7ca3a0e11307dfffdb04dcd766ced42ba7759e5c))
* **api:** manual updates ([acfadba](https://github.com/moderation-api/sdk-typescript/commit/acfadbaf925aae76ffb54f0aecfe1379edba07f6))
* **api:** manual updates ([8bc188e](https://github.com/moderation-api/sdk-typescript/commit/8bc188e6684c821b4e9558a3298915ec338e031b))
* **api:** manual updates ([e417812](https://github.com/moderation-api/sdk-typescript/commit/e4178126fec57e54c58a36651777510947b876b7))
* **api:** manual updates ([c324495](https://github.com/moderation-api/sdk-typescript/commit/c324495083594c2de34a36d1d48a284090894d53))
* **api:** manual updates ([4a4bf70](https://github.com/moderation-api/sdk-typescript/commit/4a4bf7017051261e76b0dfb5ac61c21f09e06bf2))
* **api:** removed deprecated moderate endpoints ([807b227](https://github.com/moderation-api/sdk-typescript/commit/807b2277c428e602245efcb343c5b5775b317d0c))
* webhooks ([5070bfc](https://github.com/moderation-api/sdk-typescript/commit/5070bfc6c83d2642cbc55a8f8fa890a1304c32fd))


### Bug Fixes

* ts issue in example ([795d694](https://github.com/moderation-api/sdk-typescript/commit/795d694aa4a41a3f457e9ec059bed5af3716c8f6))


### Chores

* **client:** fix logger property type ([b81a48a](https://github.com/moderation-api/sdk-typescript/commit/b81a48a13c61ffcba2d9d7af65cddba3963a7a0c))
* configure new SDK language ([a78ef9f](https://github.com/moderation-api/sdk-typescript/commit/a78ef9fccea4332db449a1bbba76a6cdf9aeb3c2))
* configure new SDK language ([2ab5a5c](https://github.com/moderation-api/sdk-typescript/commit/2ab5a5caaefe864242d39c4161f68700fbcca8e1))
* **internal:** upgrade eslint ([3e98b33](https://github.com/moderation-api/sdk-typescript/commit/3e98b33fdfaa3d6c6bc0ff501430de0f9042aa48))
* update SDK settings ([f9fb9a8](https://github.com/moderation-api/sdk-typescript/commit/f9fb9a8ccb4cb7cb1f233fd0287cf1856edc82a1))
* update SDK settings ([01c9a9c](https://github.com/moderation-api/sdk-typescript/commit/01c9a9c9fee0cdac82037903aa90dc16cfe7ca7a))


### Documentation

* instantion examples ([86afff0](https://github.com/moderation-api/sdk-typescript/commit/86afff0d16a98ef3edeb5013ebab73adb889839a))
* more examples and information ([fe6c864](https://github.com/moderation-api/sdk-typescript/commit/fe6c864ad21bd16131f01431cf541c2cd3a5ecfe))
* title ([2ec75c9](https://github.com/moderation-api/sdk-typescript/commit/2ec75c94e7b2b4a17ffa84dc08598bbd216461bf))
