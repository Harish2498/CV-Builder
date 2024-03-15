import React, { useEffect, useState } from 'react';
import { Button, Drawer, Typography } from 'antd';

const { Title } = Typography;

const SkillsPreview = ({ open, setOpen }) => {
    //   const [open, setOpen] = useState(false);
    const [skills, setSkills] = useState({});

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const skillsDetails = JSON.parse(localStorage.getItem('skills')) || {};
        setSkills(skillsDetails);
    }, [open])
    return (
        <>
            <Drawer
                size='large'
                title="Skills"
                onClose={onClose}
                open={open}
            >
                <div>

                    <div>
                        <table border={1} width={`100%`} >
                            <tr >
                                <th className=' w-56 bg-lightGray'>Project Management Tools & Approach</th>
                                <td className=' pl-2'>{skills.projectManagementTools}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Frontend/Web Technologies</th>
                                <td className=' pl-2'>{skills.frontendTechnologies}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Backend/Web Technologies</th>
                                <td className=' pl-2'>{skills.backendTechnologies}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Databases</th>
                                <td className=' pl-2'>{skills.databases}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Web/Application Server</th>
                                <td className=' pl-2'>{skills.WebApplicationServer}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>IDE’s</th>
                                <td className=' pl-2'>{skills.ide}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Repository tools</th>
                                <td className=' pl-2'>{skills.repositoryTools}</td>
                            </tr>
                        </table>

                    </div>


                </div>
            </Drawer>
        </>
    );
};
export default SkillsPreview;