import React from 'react';
import GlitchTitle from '../components/glitchTitle';
import palm from '../img/vector.svg';
import '../styles/firstView.scss';

export default function FirstView() {
    return (
        <div>

            <GlitchTitle title={'近設計'}/>

            <div className='circle'>
                <img src={palm} alt="" />
                {
                    line.map(linea => (
                        <span key={linea.id} className={`line lineItem-${linea.id}`}></span>
                    ))
                }
            </div>

            <div className="ag-primary-block">
                <div className="ag-primary_road-map">
                    <div className="ag-primary_road">
                        <div></div>
                    </div>
                    <div className='columns'>
                        {
                            line.map(linea => (
                                <span key={linea.id} className={`column column-${linea.id}`}></span>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

const line = [
    {
        id: 0,
    },
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    },
    {
        id: 10,
    }
]