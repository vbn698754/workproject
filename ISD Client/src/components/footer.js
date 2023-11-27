import React, { Component } from 'react';
import ft from '../css/footer.module.css';

class Footer extends Component {
    state = {
    }
    render() {
        return (
            <footer className={ft.footer}>
                <div className={"container "+ft.myFooter}>
                    <div className={"row "+ft.footerRow}>
                        <div className={"col-md-3  col-sm-12 "+ft.footerLogoP}>
                            <div className={ft.footerLogo}></div>
                        
                        </div>
                        <div className={"col-md-5 col-sm-12 "+ft.footerA}>
                            <a href="/">常見問題</a>
                            <a href="/">聯絡我們</a>
                            <a href="/">隱私權政策</a>
                            <a href="/">服務條款</a>
                        </div>
                        <div className={"col-md-4 col-sm-12 "+ft.footerContent}>
                            <div>票務服務單位 : 澤米科技股份有限公司／統一編號 80137437</div>
                            <div>客服專線 : <a href="tel:+886 (04) 2234-3234">+886 (04) 2234-3234</a></div>
                            <div>客服信箱 : <a href="mailto:support@comesee.com">support@comesee.com</a></div>
                            <div>客服時間 : 週一 ~ 週五 10:00-12:30 | 13:30-18:00(適逢國定假日暫停服務)</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;