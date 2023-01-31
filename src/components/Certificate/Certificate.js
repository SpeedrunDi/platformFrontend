import React from 'react'
import './Certificate.scss'

const Certificate = ({course, fullName, description}) => (
    <div className="certificate">
        <div className={"certificate__logo"}>
            <i>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 800 600">
                    <g>
                        <path fill="#152200" d="M584.13,537.02H215.87c-28.97,0-52.45-23.48-52.45-52.45V115.43c0-28.97,23.48-52.45,52.45-52.45h368.25
		c28.97,0,52.45,23.48,52.45,52.45v369.14C636.57,513.54,613.09,537.02,584.13,537.02"/>
                        <path fill="#ADFA00" d="M436.86,93.05H335.5c-0.24,0-0.43,0.2-0.43,0.43v129.88c0,0.23,0.19,0.43,0.43,0.43h101.36
		c15.96,0,28.94-12.98,28.94-28.94V122C465.8,106.04,452.82,93.05,436.86,93.05 M403.88,184.67c0,1.91-1.55,3.46-3.46,3.46
		c-1.91,0-3.46-1.55-3.46-3.46v-52.49c0-1.9,1.55-3.46,3.46-3.46c0.93,0,1.8,0.36,2.45,1.01c0.66,0.67,1.01,1.54,1.01,2.45V184.67z"
                        />
                        <path fill="#ADFA00" d="M607.35,93.49v101.37c0,15.96-12.98,28.94-28.94,28.94h-72.85c-15.96,0-28.94-12.98-28.94-28.94V93.49
		c0-0.23,0.19-0.43,0.43-0.43h61.05c0.24,0,0.43,0.2,0.43,0.43v91.19c0,1.91,1.55,3.45,3.46,3.45c1.91,0,3.46-1.55,3.46-3.45V93.49
		c0-0.23,0.19-0.43,0.43-0.43h61.05C607.16,93.05,607.35,93.25,607.35,93.49"/>
                        <path fill="#ADFA00" d="M436.86,234.62H335.5c-0.23,0-0.43,0.2-0.43,0.43v129.88c0,0.23,0.2,0.43,0.43,0.43h61.04
		c0.23,0,0.43-0.2,0.43-0.43v-11.21c0-1.67,1.36-3.02,3.02-3.02h36.86c15.96,0,28.94-12.98,28.94-28.94v-58.19
		C465.8,247.61,452.82,234.62,436.86,234.62 M403.88,311.57c0,1.91-1.55,3.46-3.46,3.46c-1.91,0-3.46-1.55-3.46-3.46v-37.82
		c0-1.91,1.55-3.46,3.46-3.46c0.9,0,1.78,0.36,2.44,1c0.67,0.68,1.02,1.55,1.02,2.45V311.57z"/>
                        <path fill="#ADFA00" d="M257.58,282.25c0,1.91,1.55,3.46,3.46,3.46h34.26c15.96,0,28.94,12.98,28.94,28.94v21.78
		c0,15.96-12.98,28.94-28.94,28.94H193.93c-0.24,0-0.43-0.2-0.43-0.43v-43.31c0-0.24,0.19-0.43,0.43-0.43h62.78
		c1.91,0,3.46-1.56,3.46-3.46c0-1.91-1.55-3.46-3.46-3.46h-34.27c-15.96,0-28.94-12.98-28.94-28.94v-21.78
		c0-15.96,12.98-28.94,28.94-28.94h101.36c0.24,0,0.43,0.2,0.43,0.43v43.31c0,0.24-0.19,0.43-0.43,0.43h-62.77
		C259.13,278.8,257.58,280.35,257.58,282.25"/>
                        <path fill="#ADFA00" d="M578.41,234.62h-72.85c-15.96,0-28.94,12.98-28.94,28.94v101.37c0,0.23,0.19,0.43,0.43,0.43h61.04
		c0.24,0,0.43-0.2,0.43-0.43v-10.79c0-1.9,1.55-3.45,3.46-3.45c1.91,0,3.46,1.55,3.46,3.45v10.79c0,0.23,0.2,0.43,0.43,0.43h61.06
		c0.23,0,0.43-0.2,0.43-0.43V263.57C607.35,247.61,594.37,234.62,578.41,234.62 M545.43,311.57c0,1.9-1.55,3.45-3.46,3.45
		c-1.91,0-3.46-1.55-3.46-3.45v-37.82c0-0.93,0.36-1.8,1.01-2.45c0.65-0.65,1.52-1,2.44-1c1.91,0,3.46,1.55,3.46,3.46V311.57z"/>
                        <path fill="#ADFA00" d="M258.47,138.36c-0.57,0.64-0.89,1.48-0.89,2.33c0,0.11,0.01,0.23,0.02,0.34c0.17,1.75,1.74,3.11,3.56,3.11
		h62.65c0.23,0,0.43,0.19,0.43,0.43v27.72c0,0.23-0.2,0.43-0.43,0.43h-62.63c-1,0-1.97,0.42-2.66,1.15
		c-0.65,0.69-0.98,1.58-0.92,2.51c0.05,0.84,0.41,1.63,1.01,2.25c0.66,0.64,1.53,1,2.44,1h62.77c0.23,0,0.43,0.19,0.43,0.43v43.31
		c0,0.23-0.2,0.43-0.43,0.43H222.44c-15.96,0-28.94-12.98-28.94-28.94v-23.77c0-5.08,4.13-9.21,9.21-9.21c0.86,0,1.69-0.3,2.34-0.85
		c0.69-0.58,1.12-1.37,1.22-2.26c0.1-0.98-0.22-1.94-0.87-2.67c-0.66-0.73-1.59-1.13-2.57-1.13h-0.12c-5.08,0-9.21-4.14-9.21-9.22
		V122c0-15.96,12.98-28.94,28.94-28.94h101.36c0.23,0,0.43,0.2,0.43,0.43v43.31c0,0.23-0.2,0.43-0.43,0.43h-62.77
		C260.06,137.23,259.13,137.64,258.47,138.36"/>
                        <path fill="#ADFA00" d="M257.58,441.57c0,1.91,1.55,3.46,3.46,3.46h62.77c0.24,0,0.43,0.2,0.43,0.43v61.05c0,0.23-0.19,0.43-0.43,0.43
		H222.44c-15.96,0-28.94-12.98-28.94-28.94v-72.86c0-15.96,12.98-28.94,28.94-28.94h101.36c0.24,0,0.43,0.2,0.43,0.43v61.05
		c0,0.23-0.19,0.43-0.43,0.43h-62.77C259.13,438.11,257.58,439.66,257.58,441.57"/>
                        <path fill="#ADFA00" d="M400.03,421.5c-0.66,0.73-0.97,1.7-0.87,2.67c0.17,1.75,1.74,3.11,3.56,3.11h62.65c0.23,0,0.43,0.19,0.43,0.43
		v27.71c0,0.23-0.2,0.43-0.43,0.43h-62.63c-1,0-1.97,0.42-2.66,1.15c-0.66,0.69-0.98,1.58-0.92,2.51c0.04,0.84,0.41,1.63,1.01,2.25
		c0.66,0.64,1.52,1,2.44,1h62.77c0.23,0,0.43,0.19,0.43,0.43v43.31c0,0.23-0.2,0.43-0.43,0.43H364c-15.96,0-28.94-12.98-28.94-28.94
		v-23.77c0-5.08,4.13-9.21,9.21-9.21c0.86,0,1.69-0.3,2.34-0.85c0.69-0.58,1.12-1.37,1.22-2.26c0.09-0.98-0.22-1.94-0.87-2.67
		c-0.66-0.73-1.59-1.13-2.56-1.13h-0.12c-5.08,0-9.21-4.14-9.21-9.22v-23.76c0-15.96,12.98-28.94,28.94-28.94h101.36
		c0.23,0,0.43,0.2,0.43,0.43v43.31c0,0.23-0.2,0.43-0.43,0.43H402.6C401.62,420.37,400.69,420.78,400.03,421.5"/>
                        <path fill="#FFFFFF" d="M504.63,416.43c-10.62,7.19-19.96,14.97-27.6,22.73c-0.88,0.9-0.24,2.42,1.02,2.42h34.04
		c1.23,0,1.87,1.46,1.05,2.37c-14.99,16.68-21.62,32.61-15.58,41.53c0.42,0.62,0.9,1.19,1.43,1.72
		c11.26,11.38,46.21,2.68,80.37-20.47c10.62-7.19,19.96-14.98,27.6-22.73c0.88-0.9,0.24-2.42-1.02-2.42h-34.04
		c-1.23,0-1.87-1.46-1.05-2.37c14.98-16.67,21.62-32.61,15.58-41.52c-0.42-0.62-0.89-1.19-1.43-1.73
		C573.73,384.57,538.78,393.26,504.63,416.43"/>
                    </g>
                </svg>

            </i>
        </div>
        <div className="certificate__content-block">
            <h3 className={"certificate__content-block__title"}>Сертификат</h3>
            <p className={"certificate__content-block__fullName"}>{fullName}</p>
            <p className={"certificate__content-block__course"}>Успешно прошел курс "{course}"</p>
            <p className="certificate__content-block__description">{description}</p>
            <div className={"certificate__content-block__line"}/>
        </div>
    </div>
)

export default Certificate
