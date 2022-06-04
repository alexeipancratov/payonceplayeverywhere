import React from 'react';
import styled from 'styled-components';

const StyledSVG = styled.svg``;

interface Props {
  fill: string;
}

function SVGMetamask({ fill }: Props) {
  return (
    <StyledSVG width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.6307 18.0896C18.5142 18.0596 18.3342 18.0164 18.1577 17.9671C17.0833 17.6682 16.0088 17.3741 14.9368 17.0668C14.6379 16.9816 14.4014 17.0392 14.1541 17.2252C13.4422 17.7619 12.7183 18.2841 11.9872 18.7943C11.8528 18.8879 11.6595 18.9371 11.4926 18.9407C10.6643 18.9551 9.83478 18.9563 9.00645 18.9395C8.83358 18.9359 8.6367 18.8723 8.49504 18.7739C7.75195 18.2529 7.02086 17.715 6.28976 17.1772C6.08568 17.0272 5.8804 16.9864 5.6343 17.056C4.43142 17.3969 3.22494 17.727 2.01966 18.0632C1.6139 18.176 1.39781 18.062 1.27897 17.655C0.917621 16.4161 0.556277 15.1772 0.206938 13.9359C0.173324 13.8159 0.190131 13.6646 0.228546 13.5422C0.58869 12.3945 0.954836 11.2493 1.33059 10.1064C1.44703 9.75107 1.51666 9.43414 1.35339 9.04518C1.16492 8.5938 1.1133 8.0848 1.00646 7.59981C0.671523 6.0788 0.33899 4.5614 0.0136605 3.04159C-0.0103491 2.93114 -0.00194577 2.80149 0.0328681 2.69345C0.266962 1.95155 0.520263 1.21566 0.749554 0.472564C0.862399 0.107618 1.1265 -0.107267 1.57788 0.0656017C3.40021 0.76428 5.23094 1.43775 7.05567 2.12922C7.35339 2.24207 7.64871 2.30089 7.96923 2.29849C9.29696 2.28889 10.6247 2.27088 11.9524 2.30449C12.6595 2.3225 13.309 2.18805 13.9632 1.93115C15.5851 1.29609 17.2201 0.698254 18.8504 0.0872104C19.3522 -0.101265 19.5671 0.00437728 19.7327 0.515781C19.9104 1.0644 20.0605 1.62502 20.2753 2.15924C20.4758 2.65864 20.471 3.13403 20.3534 3.65023C19.95 5.41494 19.5803 7.18684 19.1973 8.95515C19.1925 8.97916 19.1913 9.00557 19.1793 9.02478C18.9176 9.40293 19.0725 9.76907 19.1973 10.146C19.5707 11.2805 19.9332 12.4173 20.2922 13.5566C20.3258 13.6646 20.3426 13.7979 20.3126 13.9035C19.9524 15.176 19.5827 16.4461 19.2117 17.715C19.1313 17.9888 18.9656 18.1004 18.6307 18.0896ZM2.31258 8.79909C2.29457 8.80269 2.34139 8.79668 2.38821 8.78468C3.56348 8.46775 4.73995 8.15203 5.91522 7.8315C6.00525 7.80749 6.09529 7.75947 6.16852 7.70185C6.96203 7.0872 7.75435 6.46896 8.54306 5.84831C8.78316 5.65863 8.77956 5.51337 8.52626 5.3381C7.78796 4.8243 7.04607 4.3153 6.30537 3.80509C4.84919 2.80389 3.39301 1.80269 1.93563 0.803896C1.66792 0.620223 1.53227 0.66224 1.42302 0.955157C1.16852 1.63943 0.912819 2.3225 0.673924 3.01158C0.629506 3.13763 0.627105 3.29729 0.659518 3.42814C0.828786 4.13643 1.01366 4.84111 1.19493 5.54699C1.45183 6.54699 1.70994 7.54699 1.96684 8.54699C2.00285 8.69464 2.05087 8.8279 2.31258 8.79909ZM19.8744 3.24927C19.8564 3.18925 19.8408 3.12682 19.8192 3.068C19.5731 2.38133 19.3258 1.69585 19.0773 1.01038C18.9428 0.640631 18.8192 0.604617 18.4926 0.829106C16.3354 2.3141 14.1769 3.79909 12.0184 5.28408C11.6751 5.52058 11.6691 5.64423 11.9932 5.89753C12.7147 6.46175 13.435 7.02838 14.1589 7.589C14.2778 7.68144 14.405 7.78468 14.5443 7.8231C15.7255 8.15203 16.9104 8.46895 18.0953 8.78588C18.3546 8.85551 18.4434 8.79669 18.5118 8.53378C18.8936 7.06079 19.2765 5.5878 19.6571 4.11482C19.7315 3.8291 19.8012 3.54219 19.8744 3.24927ZM10.2381 17.08C10.2381 17.0788 10.2381 17.0788 10.2381 17.0776C10.6871 17.0776 11.1373 17.08 11.5863 17.0764C11.782 17.0752 11.9164 16.9972 11.8864 16.7703C11.8456 16.4617 11.8072 16.152 11.7579 15.8447C11.7183 15.5974 11.4758 15.3801 11.2309 15.3789C10.5563 15.3741 9.8828 15.3741 9.20813 15.3789C8.98724 15.3801 8.70033 15.613 8.67752 15.7943C8.6415 16.0884 8.60669 16.3813 8.58268 16.6766C8.55627 16.9912 8.6247 17.0716 8.93802 17.0776C9.37139 17.086 9.80477 17.08 10.2381 17.08ZM8.56587 12.3441C8.56347 12.3297 8.56707 12.2949 8.55387 12.2673C8.3954 11.9347 8.24294 11.5974 8.06407 11.2757C8.02926 11.212 7.86839 11.1556 7.79877 11.1832C7.41101 11.3357 7.02686 11.499 6.65711 11.6886C6.45543 11.7919 6.46503 12.0824 6.67032 12.1508C7.18652 12.3249 7.70993 12.4762 8.23574 12.6142C8.43022 12.6646 8.55987 12.541 8.56587 12.3441ZM12.2718 12.6202C12.7339 12.4774 13.2826 12.3261 13.8168 12.1352C14.0208 12.062 13.9932 11.7859 13.7808 11.6826C13.4338 11.5158 13.0797 11.3633 12.7267 11.2084C12.5839 11.146 12.4422 11.17 12.3702 11.3105C12.2081 11.6238 12.0521 11.9407 11.9212 12.2685C11.842 12.4665 11.9752 12.6202 12.2718 12.6202Z"
        fill={fill}
      />
    </StyledSVG>
  );
}

export default SVGMetamask;