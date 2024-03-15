import React, { useEffect, useState } from 'react';
import { Button, Drawer, Flex, Typography } from 'antd';

const { Title } = Typography;

const ProjectPreview = ({ open, setOpen, setEditProjectIndex, editProject }) => {
    //   const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState(null)

    const onClose = () => {
        setOpen(false);
    };

    const deleteProject = (index) => {
        let projectDetails = JSON.parse(localStorage.getItem('project'));
        projectDetails.splice(index, 1);
        localStorage.setItem('project', JSON.stringify(projectDetails));
        setProjects(projectDetails);

    }

    useEffect(() => {
        const projectDetails = JSON.parse(localStorage.getItem('project'));
        setProjects(projectDetails);
    }, [open])
    return (
        <>
            {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
            <Drawer
                size='large'
                title="Projects"
                onClose={onClose}
                open={open}
            >
                <div>
                    {/* <Title level={5} className='w-32 bg-lightGray' >Project Details</Title> */}
                    {
                        projects?.map((e, i) => (
                            <div className='mb-4'>
                                <div className='mb-2'>
                                    <table border={1} width={`100%`}>
                                        <tr >
                                            <th className=' bg-primary text-white'>
                                                Project {i + 1}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className='w-32 bg-lightGray'>Role</th>
                                            <td>{e.role}</td>
                                        </tr>
                                        <tr>
                                            <th className='w-32 bg-lightGray'>Project title</th>
                                            <td>{e.projectTitle}</td>
                                        </tr>
                                        <tr>
                                            <th className='w-32 bg-lightGray'>Duration</th>
                                            <td>{e.startDate} to {e.endDate}</td>
                                        </tr>
                                        <tr>
                                            <th className='w-32 bg-lightGray'>Tools and technologies</th>
                                            <td>{e.technologies}.</td>
                                        </tr>
                                        <tr>
                                            <th className='w-32 bg-lightGray'>Description</th>
                                            <td>{e.description} </td>
                                        </tr>
                                        <tr>
                                            <th className='w-32 bg-lightGray'>Roles and Responsibility</th>
                                            <td>
                                                <ul className='pl-5'>
                                                    {
                                                        e.projectResponsibility?.map((element, index) => (
                                                            <li>{element.projectResponsibility}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>

                                </div>
                                <Flex className='justify-end' gap={1}>
                                    <Button
                                        onClick={() => {
                                            setEditProjectIndex(i);
                                            editProject(i);
                                            onClose();
                                        }}
                                        danger
                                        size='small'
                                        type='primary'
                                    >
                                        Edit
                                    </Button>
                                    <Button onClick={() => deleteProject(i)} danger size='small' type='primary'>Delete</Button>
                                </Flex>
                            </div>
                        ))
                    }
                </div>
            </Drawer >
        </>
    );
};
export default ProjectPreview;