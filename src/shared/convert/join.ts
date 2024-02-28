export const returnTermTypeToLabel = (t: number) => {
    return t === 1
        ? '(필수) 서비스 이용약관'
        : t === 2
        ? '(필수) 개인정보 활용 동의서'
        : t === 3
        ? '(필수) 저작권 정책약관'
        : t === 4
        ? '(선택) 마케팅 정보 수신동의'
        : null
}
