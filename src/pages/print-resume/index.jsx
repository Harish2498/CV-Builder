import React, { useEffect } from 'react';
import IdsTemplate from '../../templates/ids-template';
import logo from '../../assets/IDS2.png';
import './style.css'; // Import CSS for print styling
import { Flex } from 'antd';

const personalDetails = JSON.parse(localStorage.getItem('personalDetails')) || {};
const personalProfile = JSON.parse(localStorage.getItem('personalProfile')) || [];
const experience = JSON.parse(localStorage.getItem('experience')) || [];
const education = JSON.parse(localStorage.getItem('education')) || [];
const project = JSON.parse(localStorage.getItem('project')) || [];
const projectResponsibility = JSON.parse(localStorage.getItem('projectResponsibility')) || [];
const skills = JSON.parse(localStorage.getItem('skills')) || {};

const PrintResume = () => {
    useEffect(() => {
        window.onafterprint = handleAfterPrint;
        window.print();
    }, []);

    const handleAfterPrint = () => {
        window.close();
    };

    return (
        <div className="print-container">
            <Flex className='justify-end'>
                <img src={logo} width='200px' height='100px' alt="Logo" className="logo" />
            </Flex>
            <IdsTemplate
                personalDetails={personalDetails}
                personalProfile={personalProfile}
                experience={experience}
                education={education}
                project={project}
                projectResponsibility={projectResponsibility}
                skills={skills}
            />
        </div>
    );
};

export default PrintResume;
