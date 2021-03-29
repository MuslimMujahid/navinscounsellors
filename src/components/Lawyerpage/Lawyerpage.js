import React, { useEffect, useContext } from 'react'
import { linkStateContext } from '../Context/linkStateContext'
import { Address, Copyright } from '../Footer/Footer'
import { lawyer_en } from '../items'
import MetaTags from 'react-meta-tags'
import './style.scss'

const Lawyerpage = ({ match: { params: { link } }}) => {
    
    const linkStateCtx = useContext(linkStateContext)
    useEffect(() => {
        linkStateCtx.set({
            home: '',
            about: '',
            practiceArea: '',
            lawyer: 'active',
            publications: '',
            contactUs: '',
        })
        window.scrollTo(0, 0)
    }, [])
    
    const lawyer = lawyer_en.find(item => item.link === '/lawyer/' + link) 
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
                        <h3 className="title">Educational Background</h3>
                        {
                            lawyer.education.map(item => 
                                <p>{ item }</p>    
                            )
                        }
                    </div>
                    <div className="content">
                        <h3 className="title">Language</h3>
                        {
                            lawyer.language.map(item => 
                                <p>{ item }</p>    
                            )
                        }
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