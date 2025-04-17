export default [
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals',
    ],
    rules: {
      // 필요한 경우에만 React import 요구 비활성화 (React 17+ 사용 시)
      'react/react-in-jsx-scope': 'off',
      // 이스케이프되지 않은 엔티티 경고 비활성화
      'react/no-unescaped-entities': 'off',
      // 사용하지 않는 변수에 대한 경고를 오류 대신 경고로 변경
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
