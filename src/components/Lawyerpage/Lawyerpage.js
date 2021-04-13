import React, { useEffect, useContext } from 'react'
import { linkStateContext } from '../Context/linkStateContext'
import { languageContext } from '../Context/languageContext'
import { Address, Copyright } from '../Footer/Footer'
import { lawyer_en, lawyer_id } from '../items'
import MetaTags from 'react-meta-tags'
import './style.scss'

const Lawyerpage = ({ match: { params: { link } }}) => {
    
    const linkStateCtx = useContext(linkStateContext)
    const languageCtx = useContext(languageContext)
    useEffect(() => {
        window.scrollTo(0, 0);
        linkStateCtx.set({
            home: '',
            about: '',
            practiceArea: '',
            lawyer: 'active',
            publications: '',
            contactUs: '',
        })
    }, [])
    
    const lawyer_data = languageCtx.lang === 'en' ? lawyer_en : lawyer_id
    const lawyer = lawyer_data.find(item => item.link === '/our-legal-team/' + link) 
    return (
        <React.Fragment>
            <MetaTags>
                <title>Lawyer - {lawyer.name} | NAV|INS Co.</title>
                <meta id="meta-description" name="description" content="NAV|INS Counsellors At Law - Navigating Your Legan Needs. Understanding deeply needs and interests of Our Clients is the way and approach that we take to provide legal services to Our Clients." />
                <meta id="og-title" property="og:title" content="NAV|INS Co." />
            </MetaTags>
            <div className="lawyerpage">
                <div className="image">
                    <img src={ lawyer.image } alt={ lawyer.name } />
                </div>
                <div className="bio">
                    <div className="content top">
                        <h1>{ lawyer.name }</h1>
                        <h2>{ lawyer.role }</h2>
                    </div>
                    <div className="content">
                    {
                        lawyer.desc.map(item => 
                            <React.Fragment>
                                <p>{ item }</p>   
                                <br />
                            </React.Fragment>    
                        )
                    }
                    </div>
                    <div className="content">
                        <h3 className="title">
                        {
                            languageCtx.lang === 'en' 
                                ? 'Recent Education'
                                : 'Pendidikan Terakhir'
                        }
                        </h3>
                        {
                            lawyer.education.map(item => 
                                <p>{ item }</p>    
                            )
                        }
                    </div>
                    <div className="content">
                        <h3 className="title">
                        {
                            languageCtx.lang === 'en' 
                                ? 'Professional Organization'
                                : 'Organisasi Profesi'
                        }
                        </h3>
                        {
                            lawyer.organization.map(item => 
                                <p>{ item }</p>    
                            )
                        }
                    </div>
                    <div className="content">
                        <h3 className="title">
                        {
                            languageCtx.lang === 'en' 
                                ? 'Language'
                                : 'Bahasa'
                        }
                        </h3>
                        {
                            lawyer.language.map(item => 
                                <p>{ item }</p>    
                            )
                        }
                    </div>
                    <div className="content">
                        <h3 className="title">Email</h3>
                        <p>{lawyer.email}</p>
                    </div>
                    <div className="content">
                        <h3 className="title">
                        {
                            languageCtx.lang === 'en' 
                                ? 'Contact'
                                : 'Kontak'
                        }
                        </h3>
                        <p>{lawyer.contact}</p>
                    </div>
                </div>
            </div>
            <footer>
                <Address />
                <Copyright />
            </footer>
        </React.Fragment>
    )
}

export default Lawyerpage