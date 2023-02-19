
  declare module 'modern-react-captcha' {
    export const Captcha: React.ComponentType<CaptchaProps>;
  
    interface CaptchaProps {
      sitekey: string;
      handleVerify: (response: string) => void;
      size?: 'normal' | 'compact';
      theme?: 'light' | 'dark';
    }
  }
  