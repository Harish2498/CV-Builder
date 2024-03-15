
import EducationForm from "../../pages/forms/education-form";
import AditionalDetailsForm from "../../pages/forms/additional-details-form";
import ExperienceForm from "../../pages/forms/experience-form";
import PersonalDetailsForm from "../../pages/forms/personal-details-form";
import ProjectForm from "../../pages/forms/project-form";
import SkillForm from "../../pages/forms/skill-form";
import { AuditOutlined, ProjectOutlined, ReadOutlined, ReconciliationOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons';


export const steps = [
    {
        title: 'Personal Details',
        link: 'personal-details',
        icon: <UserOutlined />,
        content: <PersonalDetailsForm />,
    },
    {
        title: 'Education',
        link: 'education',
        icon: <ReadOutlined />,
        content: <EducationForm />
    },
    {
        title: 'Experience',
        link: 'experience',
        icon: <AuditOutlined />,
        content: <ExperienceForm />,
    },
    {
        title: 'Skills',
        link: 'skills',
        icon: <SnippetsOutlined />,
        content: <SkillForm />,
    },
    {
        title: 'Projects',
        link: 'projects',
        icon: <ProjectOutlined />,
        content: <ProjectForm />,
    },
    // {
    //     title: 'Additional Details',
    //     link: 'additional-details',
    //     icon: <ReconciliationOutlined />,
    //     content: <AditionalDetailsForm />,
    // },
];