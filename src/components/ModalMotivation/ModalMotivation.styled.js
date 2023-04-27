import styled from 'styled-components';

export const Message = styled.p`
  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -2%;
`;

export const Accent = styled.span`
  color: #8baa36;
`;

export const Wrapper = styled.div`
  width: 200px;
  height: 170px;
  backdrop-filter: blur(30px);

  clip-path: path(
    'M0.0752458 35.0086C0.0752888 26.9535 0.310442 12.4544 2.79398 7.74527C7.02941 -0.285675 18.2669 0.215169 27.3364 0.638714L178.146 7.68153C179.054 7.72393 179.956 7.8479 180.842 8.05192L183.034 8.55666C190.695 10.3211 196.577 16.4667 198.005 24.198C199.332 31.39 200 38.67 200 45.9835V127.281C200 133.915 197.705 140.361 193.505 145.496C189.757 150.079 184.153 152.737 178.232 152.737H143.81C142.967 152.737 141.974 152.882 140.916 153.12C134.627 154.536 129.693 159.158 125.847 164.331C124.992 165.481 124.05 166.561 123.086 167.622C118.638 172.516 112.695 180 99.7271 180C95.4161 180 91.436 178.781 88.2033 177.249C83.0669 174.816 79.4068 170.263 76.0381 165.685C70.1734 157.715 60.3943 153.718 50.5164 154.303C39.9648 154.927 27.4728 154.887 18.3913 152.737C3.73841 149.267 -0.649142 130.327 0.0752458 121.756V35.0086Z'
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 268px;
    height: 250px;

    clip-path: path(
      'M0.100829 47.0671C0.100887 36.2375 0.415993 16.7442 3.74393 10.4131C9.41112 -0.368316 24.4852 0.289637 36.652 0.859711L229.773 9.9084C236.779 10.2366 243.508 12.7434 249.02 17.0788L256.22 22.7406C259.339 25.1941 261.681 28.4999 262.959 32.2572C266.297 42.0638 268 52.3323 268 62.6913V171.171C268 180.059 264.933 188.698 259.316 195.587C254.282 201.763 246.743 205.346 238.776 205.346H192.705C191.583 205.346 190.261 205.539 188.853 205.856C180.406 207.756 173.788 213.98 168.633 220.936C167.489 222.481 166.227 223.932 164.936 225.357C158.976 231.938 151.013 242 133.634 242C127.855 242 122.519 240.359 118.186 238.299C111.305 235.027 106.409 228.914 101.903 222.771C94.0396 212.049 80.8993 206.67 67.6262 207.456C53.5009 208.291 36.7947 208.233 24.6443 205.346C5.00947 200.681 -0.869851 175.217 0.100829 163.694V47.0671Z'
    );
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }

  padding: 0 24px;
`;
export const TemplateImg = styled.img`
  filter: blur(4px);
  opacity: 1;
`;

export const Box = styled.div`
  width: 300px;
  height: 300px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${({ img }) => img.mobile.retinaOne});

  @media only screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${({ img }) => img.mobile.retinaTwo});
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${({ img }) => img.tablet.retinaOne});

    @media only screen and (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url(${({ img }) => img.tablet.retinaTwo});
    }
  }
  @media (min-width: 1440px) {
    width: 500px;
    height: 500px;
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${({ img }) => img.desktop.retinaOne});

    @media only screen and (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url(${({ img }) => img.desktop.retinaTwo});
    }
  }

  border-radius: 30px;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.3);
`;

export const ButtonClose = styled.button`
  position: relative;
  top: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #8baa36;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.main};

  &:hover {
    transform: scale(1.15);
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  backdrop-filter: blur(7px);
`;
