import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import IdsTemplate from '../../templates/ids-template';

const ResumePreview = ({ open, setOpen }) => {

    const [personalDetails, setPersonalDetails] = useState({});
    const [personalProfile, setPersonalProfile] = useState(null)
    const [experience, setExperience] = useState(null)
    const [education, setEducation] = useState(null)
    const [project, setProject] = useState(null)
    const [projectResponsibility, setProjectResponsibility] = useState(null)
    const [skills, setSkills] = useState({})

    useEffect(() => {
        setPersonalDetails(JSON.parse(localStorage.getItem('personalDetails')) || {})
        setPersonalProfile(JSON.parse(localStorage.getItem('personalProfile')) || [])
        setExperience(JSON.parse(localStorage.getItem('experience')) || [])
        setEducation(JSON.parse(localStorage.getItem('education')) || [])
        setProject(JSON.parse(localStorage.getItem('project')) || [])
        setProjectResponsibility(JSON.parse(localStorage.getItem('projectResponsibility')) || [])
        setSkills(JSON.parse(localStorage.getItem('skills')) || {})
    }, [open])

    return (
        <>

            <Modal
                // title="Modal 1000px width"
                centered
                open={open}
                onOk={() => window.open('/print-resume')}
                okText='Print'
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <IdsTemplate
                    personalDetails={personalDetails}
                    personalProfile={personalProfile}
                    experience={experience}
                    education={education}
                    project={project}
                    projectResponsibility={projectResponsibility}
                    skills={skills}
                />
            </Modal>
        </>
    );
};
export default ResumePreview;