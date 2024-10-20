import React from "react";
import styles from "./styles.module.scss"
import { IconProps } from "../../types/icons";

export function HeaderLogo ({width= 49, height = 49}: IconProps) {
  return (
    <span className={styles.header_logo}>
      <svg width={width} height={height} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6397 20.1342C11.3354 19.8452 11.0931 19.4928 10.9301 19.1039C10.7065 19.034 10.4735 18.9991 10.2406 18.9991C9.92229 19.0293 9.79495 19.0578 9.54184 19.1674C9.55581 19.3499 9.63812 19.6055 9.81669 20.0342C9.26854 19.9992 8.71573 19.088 8.66138 18.8134C8.96573 18.6578 9.28717 18.5451 9.62103 18.4768C10.5714 18.2847 11.3618 18.5181 11.7609 18.6705C11.5667 19.1309 11.5248 19.6452 11.6397 20.1342Z" fill="white"/>
        <path d="M13.46 18.7146C13.4305 18.5828 13.3995 18.4495 13.37 18.3177C13.1262 18.7098 12.8389 19.0194 12.1665 19.3179C13.8855 19.3734 14.4849 18.767 14.8452 18.0352C14.3715 18.3384 14.0377 18.5178 13.46 18.7146Z" fill="white"/>
        <path d="M18.594 18.6338C17.8284 18.6782 16.6483 18.2972 16.3625 18.5401C16.7989 16.7955 19.5505 18.002 20.1313 16.3145C19.962 17.14 20.1313 17.54 18.7136 18.1782C18.7136 18.1782 19.0971 18.4369 19.2338 18.4354L18.594 18.6338Z" fill="white"/>
        <path d="M10.1245 16.8517C10.4848 17.1406 11.3124 16.9279 11.4429 16.8438C11.1509 17.4105 10.4289 17.6058 10.1245 16.8517Z" fill="white"/>
        <path d="M16.9961 15.524C16.9759 15.3431 16.8315 15.2018 16.6529 15.1922C16.4821 15.3494 16.2492 15.524 16.0737 15.3812C16.1389 15.1684 16.6995 14.8255 17.1172 14.5938C17.1747 14.7255 17.1995 14.8684 17.1918 15.0113C17.1778 15.1986 17.111 15.378 16.9961 15.524Z" fill="white"/>
        <path d="M26.2602 8.95508C23.8828 9.06303 22.1266 10.1076 21.0737 12.2095C21.5116 11.792 21.9666 11.4173 22.4728 11.1712C22.1343 11.6602 21.8269 12.3238 21.7461 12.8969C21.8657 13.4588 22.3502 13.9144 22.4604 13.9906C22.7679 12.0761 23.5707 10.5267 26.2602 8.95508Z" fill="white"/>
        <path d="M19.0806 9.82506C18.4222 10.2362 17.7452 10.8157 17.0588 11.9952C17.8182 9.36786 20.0682 6.68339 23.4519 5.92773C21.1382 7.33903 20.0853 9.44406 20.2235 10.8744C20.0123 11.2205 19.1257 11.6412 18.4673 11.9682C18.5775 11.1062 18.8042 10.3807 19.0806 9.82506Z" fill="white"/>
        <path d="M8.8995 27.2554C8.12152 26.3489 7.65567 23.9264 8.07649 21.9912C8.20538 23.1136 8.52526 24.3375 9.68679 25.3853C11.2055 25.1694 11.4058 25.525 11.3514 25.525C9.92282 26.114 9.69145 26.5775 8.8995 27.2554Z" fill="white"/>
        <path d="M12.729 47.125C14.9309 44.2913 16.2539 40.8496 16.5303 37.2412C16.5303 37.2412 14.4215 38.8398 12.6653 40.2972C13.8113 38.2763 15.0241 35.6537 15.7958 32.5374C16.4045 30.0768 16.5955 27.8861 16.5971 26.0684C16.8968 26.6129 17.2881 27.3669 17.6887 28.2845C18.0474 29.1037 18.8145 30.861 19.1546 32.6692C19.7105 35.6188 19.0118 38.0953 18.7447 39.0145C17.3611 43.7691 13.8749 46.3472 12.729 47.125Z" fill="white"/>
        <path d="M21.8887 27.586L20.2117 27.5796C20.2645 26.5366 20.4912 25.5111 20.8809 24.5459C21.749 25.2857 22.1372 26.4588 21.8887 27.586Z" fill="white"/>
        <path d="M25.9272 31.2371C26.0189 30.7228 26.1182 29.0495 26.112 28.8257L26.5329 27.4414C26.626 28.7559 26.4055 30.0163 25.9272 31.2371Z" fill="white"/>
        <path d="M22.7708 31.7927L20.6248 31.1291C20.749 30.4052 20.7707 29.8623 20.7521 29.221L21.1729 29.7496L22.3065 28.2256C22.9602 29.2908 23.1279 30.5926 22.7708 31.7927Z" fill="white"/>
        <path d="M24.0012 36.5074C22.8552 36.409 21.7449 36.0582 20.7449 35.4787C20.9421 34.9501 21.0104 34.5056 21.0197 33.9214C21.0197 33.9214 21.7294 34.4453 21.8893 34.4072C21.9887 34.223 22.1036 34.0309 22.2341 33.8373C22.6362 33.2404 23.1238 32.7117 23.6829 32.2656C24.1673 33.6229 24.2791 35.0898 24.0012 36.5074Z" fill="white"/>
        <path d="M44.0856 28.4782C43.9412 28.3766 43.6539 26.7637 43.6539 26.7637C43.5266 27.9575 43.23 29.1259 42.7719 30.2308C41.4629 33.3772 39.1833 35.1473 38.0513 35.9045C37.5761 33.582 37.7656 31.1674 38.5963 28.9528C38.5622 29.7323 38.8261 30.4959 39.3324 31.0801C41.0886 27.5145 42.0623 23.5998 42.1849 19.6104C42.7362 20.1707 43.7362 21.3407 44.2642 23.1394C45.0003 25.6413 44.3465 27.7527 44.0856 28.4782Z" fill="white"/>
        <path d="M33.8061 8.81536C33.4319 10.1616 33.5872 10.7013 33.4909 11.3681C33.4909 11.3681 32.9381 10.9331 32.7083 9.20747L33.0654 9.76786C33.2611 8.60898 33.0204 7.84222 33.3806 7.36914C36.0655 8.00097 38.5532 11.2823 36.0841 18.6039C36.0375 17.5578 37.7208 10.9474 33.8061 8.81536Z" fill="white"/>
        <path d="M32.886 3.97558C31.5691 5.25193 31.4356 6.16316 31.0753 7.86179C30.7648 6.67434 30.7601 5.45355 31.198 3.78031C32.4356 3.51679 32.7788 3.8327 32.886 3.97558Z" fill="white"/>
        <path d="M23.3373 23.7598C19.1804 24.7345 18.5965 21.7675 17.671 22.4342C17.2455 22.7359 18.1244 23.2899 18.1244 23.2899C17.9878 23.4677 15.5079 23.8027 15.6275 22.1533C15.7626 21.4532 16.3402 21.0928 17.2875 21.0166C19.9164 21.0976 19.831 23.6471 23.3373 23.7598Z" fill="white"/>
        <path d="M17.9722 18.9418C15.0436 19.3212 15.3852 23.2408 12.1273 22.3216C12.0544 22.3867 11.9441 22.6772 11.9954 23.1312C11.8696 23.0598 11.3587 22.8677 11.1677 21.9438C10.9394 22.5423 10.8292 23.2249 11.5155 23.8551C11.2966 23.8837 10.3913 23.6916 10.1118 22.7709C10.1118 22.7709 9.96113 22.9725 9.79653 23.1074C9.63814 22.8407 9.53565 22.3311 9.6459 22.0279C9.79187 22.0708 10.1257 21.9723 10.1257 21.9723C8.87569 21.4913 8.91762 20.6627 8.88501 20.1023C10.0621 20.7341 10.6615 20.823 10.6615 20.823C10.6615 20.823 10.5108 20.5452 10.3556 20.2245C11.7329 20.7944 13.0031 21.0421 14.6134 19.7705C16.6601 18.2163 17.9924 16.0621 18.126 15.6334C18.126 15.6334 17.6415 15.7731 17.303 15.7588C17.5095 15.2588 17.6229 15.1127 17.7145 14.4539C17.7145 14.4539 17.9288 14.8 17.9614 14.9778C18.0018 14.8063 18.1213 14.4174 18.126 14.0189C17.6322 13.9808 17.2067 14.1078 16.2331 14.7905C16.2641 14.5889 16.32 14.3904 16.3977 14.2015C15.438 14.973 15.7191 15.6398 14.0653 15.7017C13.7097 15.7239 11.8634 15.6874 11.1025 14.7825C12.2888 14.3682 15.1632 13.3728 15.7812 11.3535C15.9116 12.0473 15.775 12.9521 15.3697 13.8221C15.7952 13.3871 16.3992 12.8966 16.5638 12.0965C17.0716 12.6299 17.202 12.8616 18.4443 13.1347C18.4536 13.122 18.1974 12.868 18.0608 12.6442C18.5406 12.5807 19.2751 12.5664 19.7751 12.3076C19.7471 12.9172 20.0422 13.5903 20.2829 13.8221C20.2829 13.8221 20.036 12.6934 20.4475 11.9568C20.4956 12.7918 20.7487 13.5776 21.3124 13.9062L21.4149 13.4014C21.682 14.0332 22.2177 14.4682 22.2177 14.4682C20.9149 14.4968 19.6586 15.0159 19.3496 16.1716C23.8296 15.589 24.5159 13.9904 24.8653 11.7329C25.0501 13.0585 25.2365 15.2731 23.4942 16.1795C23.8995 16.2145 24.2721 16.0541 24.8793 15.8573C23.4243 17.8845 22.4646 16.0541 21.5593 17.6813C22.2736 18.0671 22.4646 18.256 22.4646 18.256C22.4646 18.256 21.491 18.2496 21.0795 18.5783C21.0453 18.9227 21.6898 19.6514 22.4926 20.2896C19.6322 20.3372 19.8512 19.418 17.9722 18.9418Z" fill="white"/>
        <path d="M28.0613 13.4259C27.1607 13.4688 26.7973 13.4735 26.1669 13.0354C25.996 12.9052 25.92 12.5877 25.8345 12.2353C25.7693 11.8606 25.892 11.5558 25.7631 11.3161C25.6109 11.0478 25.3998 10.8176 25.1482 10.6446C25.3625 10.589 25.9945 10.4573 26.392 10.8129C26.6234 11.0192 26.8035 11.3113 26.8361 11.8463C26.9045 12.9623 27.1017 12.7988 28.0613 13.4259Z" fill="white"/>
        <path d="M7.96628 41.2275C8.85606 43.2865 10.0036 44.7803 10.6729 45.5725C9.45235 44.7835 8.31878 43.8611 7.29545 42.8197C6.5035 42.0133 4.89165 40.2369 3.76584 37.9413C3.49875 37.3984 3.26582 36.8396 3.06706 36.2665C2.07013 33.409 2.0546 30.6499 2.23163 28.737C2.29064 28.1004 2.37138 27.5574 2.44281 27.1352C1.38688 28.0004 0.566979 29.1291 0.0638581 30.4118C-0.329011 26.8002 1.16638 23.476 3.42266 19.9057C4.38542 18.3832 4.62456 17.4577 4.90562 16.5592C5.56869 14.4558 5.59664 12.5825 5.51434 11.3252C5.59975 11.7522 5.68515 12.1793 5.77056 12.6063C6.46468 16.0734 5.29384 17.2641 5.2224 21.1534C5.16805 24.0554 5.68826 26.1573 5.97398 27.1463C6.16343 27.7972 6.35287 28.3274 6.49263 28.6877C6.60288 27.7829 6.72866 26.9986 7.19762 26.3335C7.19762 26.3335 7.2939 28.3845 8.5781 29.9371C9.13091 28.8671 10.8825 27.7162 11.4043 27.4162C9.83124 29.9133 8.48648 33.0169 9.07967 37.3127C7.46316 35.4124 7.27216 33.3741 7.12309 31.7024C6.81252 32.974 6.67121 34.2837 6.70382 35.595C6.75506 37.6016 7.21315 39.3748 7.82031 40.8719C7.8669 40.9957 7.91659 41.1132 7.96628 41.2275Z" fill="white"/>
        <path d="M21.8894 27.586C21.9655 26.2493 21.2822 25.173 20.8816 24.5459C22.0649 24.6935 22.672 25.5206 22.9779 26.1874C22.9779 26.1874 22.3506 27.3082 21.8894 27.586Z" fill="white"/>
        <path d="M23.7996 28.8912C23.7949 28.9626 23.7965 29.0325 23.8042 29.1039C23.8337 29.2944 24.2794 29.8263 24.2934 30.0691C24.3229 30.3724 23.1536 31.6852 22.7716 31.7932C22.7669 30.6343 22.9952 30.2263 22.3088 28.2276C23.5138 27.3656 24.7142 25.8241 25.3912 23.7207C25.4984 25.7638 24.885 27.445 23.7996 28.8912Z" fill="white"/>
        <path d="M25.6003 34.9046C25.0956 35.4682 24.5615 36.0032 23.9993 36.508C24.1546 35.0412 24.0956 33.6188 23.6794 32.2678C24.1826 31.863 24.6344 31.3978 25.0258 30.8803C26.0087 29.5801 26.3783 28.2514 26.5336 27.4434C26.5134 28.0307 26.4916 28.6181 26.4715 29.2055C26.2603 30.6041 25.7245 31.9312 24.9062 33.0727C25.1655 33.4822 25.4823 34.0998 25.6003 34.9046Z" fill="white"/>
        <path d="M48.4221 22.6491C47.7264 21.0489 46.2186 18.1898 43.2107 15.7879C41.7542 14.6275 40.1268 13.7131 38.3876 13.0797C39.1702 16.3198 38.15 20.0504 35.3114 25.1066H35.313C35.9543 24.7065 36.664 24.4351 37.4047 24.3065C34.8751 26.7497 34.3347 29.3659 34.4185 33.8585C33.9154 33.2997 33.1887 31.5535 33.1887 31.5535C33.035 32.2266 32.9682 32.9155 32.993 33.6061C33.0738 35.8112 34.0583 36.6986 34.2726 38.6179C34.4201 39.9339 34.1142 40.9198 33.7182 42.1945C32.861 44.9552 31.2321 46.8126 30.1606 47.8286C31.7896 44.1757 32.1747 40.072 31.2554 36.1683C30.8594 34.819 30.2492 32.3599 30.7259 29.3452C31.0846 27.0783 31.8796 24.9256 32.8207 23.2064C32.9387 23.0413 33.0505 25.0002 33.2058 25.0018C33.6794 23.862 35.4294 18.9137 33.9465 14.2862C33.226 12.7907 32.4045 10.4587 32.6716 7.68213C32.7135 7.23763 32.7834 6.79789 32.8766 6.36133C33.7679 7.18524 35.1856 8.26316 37.1407 8.80926C38.633 9.22519 39.2075 8.98865 40.4451 9.30933C43.116 10.0031 44.7387 12.2272 45.7015 13.5591C48.2854 17.1389 48.4454 21.0616 48.4221 22.6491Z" fill="white"/>
        <path d="M31.3082 6.75963C31.2305 7.12634 31.1529 7.49305 31.0753 7.86136C30.9044 7.00252 30.6933 5.32928 31.2538 3.3703C31.5784 2.24158 32.1094 1.18589 32.8175 0.258789C33.566 3.0782 34.5117 5.38485 37.9854 7.0295C36.6997 6.99299 33.8052 6.61358 32.9092 3.92434C32.1654 4.72603 31.5318 5.65155 31.3082 6.75963Z" fill="white"/>
        <path d="M30.9115 22.9142C30.2158 24.4937 29.1226 25.4113 28.5574 25.8241C29.1832 23.8032 29.2065 21.6362 28.6257 19.601C28.4999 19.9614 28.4378 20.4631 28.09 21.1092C27.753 19.0089 26.9549 17.5309 25.7437 16.1022C26.5325 16.0815 27.3213 16.1165 28.1055 16.2054L26.5216 14.7861C27.1474 14.9369 28.1925 15.2751 29.236 16.0974C29.8571 16.5864 31.0233 17.5071 31.4302 19.1422C31.8448 20.798 31.233 22.1839 30.9115 22.9142Z" fill="white"/>
        <path d="M15.7973 23.595C15.187 24.1633 14.496 23.9236 14.35 23.7665C14.2522 23.6617 14.2382 23.5378 14.0923 23.3267C14.0084 23.2045 13.8578 23.0743 13.541 22.9394C15.1839 22.579 14.6699 23.6902 15.7973 23.595Z" fill="white"/>
        <path d="M24.7432 23.0579C24.3255 22.3181 23.7618 21.9561 23.3239 21.9434C23.2649 22.1054 23.1749 22.488 23.0009 22.7912C22.4279 22.7356 22.1779 22.6229 21.7866 22.3213C22.0304 21.8641 23.136 20.5845 23.4404 20.4004C24.1796 21.1005 24.7619 21.8958 24.7432 23.0579Z" fill="white"/>
        <path d="M3.96387 8.19926C3.8738 8.72314 3.81324 9.25337 3.78529 9.78359C3.70454 11.2774 3.87846 12.7364 3.81479 12.7411H3.81324C2.95297 11.6568 0.629912 8.11353 1.41099 2.85254C4.99185 6.03708 8.76992 9.1978 13.7872 10.9599C12.1691 10.9568 10.5572 10.7472 8.99042 10.3345C7.22484 9.86773 5.53224 9.14859 3.96387 8.19926Z" fill="white"/>
        <path d="M20.3503 21.3452C19.1453 20.2466 18.3766 19.9799 16.6731 20.5974C16.8704 19.7037 17.8533 19.3211 18.594 19.3068C17.4185 19.0734 17.1763 19.2687 16.3626 19.6433C14.2818 20.1339 14.3641 22.3199 12.1187 21.3642C12.0659 21.4214 11.8686 21.5484 11.6621 21.6261C11.5658 21.4388 11.4602 21.0673 11.3515 20.9149C11.2164 20.9784 10.9307 21.2626 10.5472 21.4579C10.3189 21.5436 9.30335 21.3721 9.11079 20.4466C9.56422 20.6355 10.277 20.7657 10.7025 20.8356C10.5239 20.572 10.4354 20.499 10.4416 20.2466C12.1295 21.0007 13.2879 20.807 14.5985 19.783C14.2321 19.9132 13.5069 20.0243 13.0892 19.937C14.965 19.1099 15.9293 17.7844 16.2446 17.0049C14.9138 18.4749 13.5053 16.9208 12.1839 17.397C12.5069 17.4494 13.069 17.4494 13.291 17.8272C13.1591 17.9828 12.9572 18.032 12.8159 18.1082C11.7087 18.3464 10.4509 17.0938 8.38872 18.0336C7.98032 17.7082 7.9974 17.5002 8.00517 17.4542C8.93377 17.4113 9.09526 16.8176 9.08439 16.7811C8.86078 17.0335 8.12474 17.1605 7.8592 16.8557C7.80796 16.7954 7.8592 16.2572 7.8592 16.2572C8.1884 15.6301 11.5503 16.1969 11.7056 16.4159C11.746 16.4382 11.1528 16.2 11.1574 16.0508C11.1714 15.9064 11.1994 15.7238 11.35 15.546C11.5829 15.5381 12.3423 15.5841 12.6808 15.5746C12.6451 15.4571 12.5208 15.3142 12.5441 15.0983C13.1202 15.065 13.833 14.6316 14.6016 14.4538C14.5644 14.6967 14.3113 14.9618 14.4262 15.1317C14.5426 15.1142 14.7662 15.1317 15.316 15.0396C15.0737 15.3555 14.6296 15.5889 14.0644 15.7079C14.2942 15.9032 14.8982 15.9397 15.274 15.954C15.2321 16.1683 15.1063 16.3286 15.0955 16.4874C15.8501 15.6698 16.5629 16.2858 17.7167 16.0381C18.3657 15.1539 18.6841 14.2426 19.4046 14.2426C19.2027 14.5332 18.9558 15.7905 19.1297 16.5017C20.7695 13.7807 23.9047 17.0271 24.8007 11.6963C24.8473 11.882 24.8846 12.5027 24.9187 12.6313L24.7541 12.617C24.3566 16.481 20.7199 15.6936 20.1686 16.5096C20.1251 16.4826 20.1888 16.2461 20.136 16.3159C19.3968 18.2003 16.9961 16.6668 16.3672 18.5416C16.8455 18.3337 17.6343 18.6797 18.5987 18.6353C19.6096 18.2987 19.8503 18.3051 20.5382 18.0558C20.2649 18.6448 20.1375 18.6432 19.7881 19.029C20.2369 19.4036 20.7152 19.7402 21.2152 20.0386C20.914 20.0624 20.6189 20.0736 20.2633 19.964C20.3472 20.3164 20.4279 20.8419 20.3503 21.3452Z" fill="white"/>
        <path d="M22.6095 9.5029C22.566 9.5029 21.2368 9.42511 21.257 9.63625C20.9945 9.58704 20.9091 9.20603 21.1824 8.93457C21.9185 9.02982 22.3548 9.23302 22.6095 9.5029Z" fill="white"/>
        <path d="M48.7166 25.3018C48.653 27.5465 48.2337 31.8248 45.7786 36.4143C42.8608 41.869 38.693 44.7233 36.769 45.8742C37.0563 44.3915 37.4368 42.7786 37.9445 41.0689C38.4026 39.5226 38.9042 38.1018 39.4135 36.8144C39.3281 37.5875 39.3933 38.3701 39.6092 39.1162C39.7474 39.5909 39.9446 40.0449 40.1962 40.4672C41.749 38.8591 43.1435 37.0985 44.3578 35.211C46.7461 31.4994 48.0132 27.9465 48.7166 25.3018Z" fill="white"/>
        <path d="M23.7784 42.2821C22.6572 42.0265 21.6029 41.5249 20.6882 40.8137C20.7208 40.6343 20.7519 40.4517 20.783 40.2691C20.8544 39.8453 20.9196 39.4294 20.9786 39.0182C21.1805 39.4357 21.533 39.7564 21.9616 39.912C22.0858 39.7421 22.224 39.5691 22.3777 39.3944C22.8544 38.8594 23.4088 38.4022 24.0206 38.0371C24.325 39.4468 24.2396 40.9168 23.7784 42.2821Z" fill="white"/>
        <path d="M25.577 40.9135C25.0024 41.4024 24.4015 41.8597 23.7788 42.2819C24.1266 40.85 24.2555 39.4324 24.0211 38.0353C24.3409 37.9258 24.6515 37.7861 24.945 37.6147C25.5522 37.2591 26.0832 36.7828 26.5087 36.2129C26.6376 37.1051 26.7044 38.5767 26.0227 40.0912C25.8938 40.3769 25.7447 40.6516 25.577 40.9135Z" fill="white"/>
        <path d="M22.2053 48.9571C20.8621 48.8983 19.5515 48.511 18.3838 47.8268C19.5018 46.706 20.1665 45.1963 20.2441 43.5977C20.5453 43.858 20.8746 44.085 21.2239 44.2739C22.1168 44.7565 22.96 44.8851 23.5066 44.9185C23.4445 46.3599 22.9942 47.7585 22.2053 48.9571Z" fill="white"/>
        <path d="M23.8421 48.8775C23.3017 48.9696 22.752 48.9966 22.2039 48.9569C22.8995 47.6646 23.3809 46.328 23.5051 44.9167C24.5378 44.8103 25.5238 44.4277 26.3655 43.8086C26.5347 44.4293 26.69 45.3882 26.4369 46.474C26.2972 47.0741 26.1263 47.7996 25.5068 48.3012C25.0518 48.6711 24.5533 48.7553 23.8421 48.8775Z" fill="white"/>
      </svg>

    </span>
  )
}
