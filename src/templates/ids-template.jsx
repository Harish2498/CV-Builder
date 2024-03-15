import { Flex, Typography } from 'antd'
import React from 'react'

const { Title } = Typography;


const IdsTemplate = ({
    personalDetails,
    personalProfile,
    experience,
    education,
    project,
    skills
}) => {
    return (
        <div className='h-full w-full flex justify-center'>
            <Flex className='justify-center w-full gap-5 flex-col'>
                <div>
                    <Title level={2} style={{ margin: 0, borderBottom: '2px solid black' }}  >{personalDetails.firstName}</Title>
                </div>

                <div>
                    <Title level={5} className='pl-2 bg-slate-300' >Personal Profile</Title>
                    {personalProfile.length ? <div className=' pl-10'>
                        <ul>
                            {
                                personalProfile?.map((e, i) => (
                                    <li key={i}>{e.personalProfile}</li>
                                ))
                            }
                            {/* <li>Having 1.6  years of IT experience as a MERN stack developer.</li>
                            <li>Created web app using Rect Js and also worked in existing web app for further development.</li>
                            <li>Good  technical knowledge on HTML5,CSS, JavaScript, ReactJs,  NodeJs, express, mongoDB and other UI libraries like MUI and ANTD for designing purpose.</li>
                            <li>Also know about redux-toolkit for handling state, formik for handling form values.</li>
                            <li>Debug web applications.</li> */}

                        </ul>
                    </div> : <span>Add your Personal Profile</span>}
                </div>
                <div>
                    <Title level={5} className='pl-2 bg-slate-300' >Education</Title>
                    {education.length ? <div className=' pl-10'>
                        <ul>
                            {
                                education?.map((e, i) => (
                                    <li key={i}>{` ${e.degree} in ${e.fieldOfStudy}  from ${e.instituteName} (${e.location}) on ${e.passingDate}.`}</li>
                                ))
                            }
                            {/* <li>	B.Tech in ME  from Jaipur engineering college and research center in 2019. </li> */}
                        </ul>
                    </div> : <span>Add your Educations</span>}
                </div>
                <div>
                    <Title level={5} className='pl-2 bg-slate-300' >Employment details</Title>
                    {experience.length ? <div className=' pl-10'>
                        <ul>
                            {
                                experience?.map((e, i) => (
                                    <li key={i}>{`Working as ${e.jobTitle} in ${e.employer} (${e.city}) from ${e.startDate} to ${e.endDate}.`}</li>
                                ))
                            }
                            {/* <li>Working as a MERN stack Developer in IDS, (Chandigarh) from august 2022 to till now. </li> */}
                        </ul>
                    </div> : <span>Add your Experience</span>}
                </div>
                <div>
                    <Title level={5} className='pl-2 bg-slate-300' >Skill</Title>
                    {Object.keys(skills).length ? <div>
                        <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }} >
                            <tr >
                                <th className=' w-56 bg-lightGray'>Project Management Tools & Approach</th>
                                <td className='pl-2'>{skills.projectManagementTools}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Frontend/Web Technologies</th>
                                <td className='pl-2'>{skills.frontendTechnologies}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Backend/Web Technologies</th>
                                <td className='pl-2'>{skills.backendTechnologies}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Databases</th>
                                <td className='pl-2'>{skills.databases}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Web/Application Server</th>
                                <td className='pl-2'>{skills.WebApplicationServer}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>IDE’s</th>
                                <td className='pl-2'>{skills.ide}</td>
                            </tr>
                            <tr>
                                <th className=' w-56 bg-lightGray'>Repository tools</th>
                                <td className='pl-2'>{skills.repositoryTools}</td>
                            </tr>
                        </table>

                    </div> : <span>Add your Skills</span>}
                </div>
                <div>
                    <Title level={5} className='pl-2 bg-slate-300' >Project Details</Title>
                    {project.length ?
                        (project?.map((e, i) => (
                            <div className='mb-4' style={{ pageBreakInside:'avoid'}} key={i}>
                                <div className='bg-black text-white pl-2 font-bold'>
                                    <span>Project {i + 1}</span>
                                </div>
                                <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
                                    {/* <tr className=' bg-black text-white '>Project {i + 1}</tr> */}
                                    <tr>
                                        <th className=' bg-lightGray w-56'>Role</th>
                                        <td className='pl-2'>{e.role}</td>
                                    </tr>
                                    <tr>
                                        <th className=' bg-lightGray w-56'>Project title</th>
                                        <td className='pl-2'>{e.projectTitle}</td>
                                    </tr>
                                    <tr>
                                        <th className=' bg-lightGray w-56'>Duration</th>
                                        <td className='pl-2'>{e.startDate} to {e.endDate}</td>
                                    </tr>
                                    <tr>
                                        <th className=' bg-lightGray w-56'>Tools and technologies</th>
                                        <td className='pl-2'>{e.technologies}.</td>
                                    </tr>
                                    <tr>
                                        <th className=' bg-lightGray w-56'>Description</th>
                                        <td className='pl-2'>{e.description} </td>
                                    </tr>
                                    <tr>
                                        <th className=' bg-lightGray w-56'>Roles and Responsibility</th>
                                        <td className='pl-2'>
                                            <ul className='pl-5'>
                                                {
                                                    e.projectResponsibility?.map((element, index) => (
                                                        <li key={index}>{element.projectResponsibility}</li>
                                                    ))
                                                }
                                            </ul>
                                        </td>
                                    </tr>
                                </table>

                            </div>
                        ))) :
                        <span>Add your Projects</span>
                    }
                </div>
            </Flex>
        </div>
    )
}

export default IdsTemplate