import React, { useEffect } from 'react'
import './style.scss'

import { Address, Copyright } from '../Footer/Footer'
import { lawyer_en } from '../items'

const Lawyerpage = ({ match: { params: { link } }}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const lawyer = lawyer_en.find(item => item.link === '/lawyer/' + link) 
    return (
        <React.Fragment>
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