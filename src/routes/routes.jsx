import React from 'react'
import { createBrowserRouter, } from 'react-router-dom'
import Resume from '../templates/ids-template'
import FormLayout from '../layout/form-layout'
import PersonalDetailsForm from '../pages/forms/personal-details-form'
import ExperienceForm from '../pages/forms/experience-form'
import EducationForm from '../pages/forms/education-form'
import ProjectForm from '../pages/forms/project-form'
import SkillForm from '../pages/forms/skill-form'
import AdditionalDetailsForm from '../pages/forms/additional-details-form'
import PrintResume from '../pages/print-resume'


const router = createBrowserRouter([
    {
        path: 'template',
        element: <Resume />
    },
    {
        path: '/',
        element: <FormLayout />,
        children: [
            {
                path: 'personal-details',
                element: <PersonalDetailsForm />
            },
            {
                path: 'experience',
                element: <ExperienceForm />
            },
            {
                path: 'education',
                element: <EducationForm />
            },
            {
                path: 'projects',
                element: <ProjectForm />
            },
            {
                path: 'skills',
                element: <SkillForm />
            },
            {
                path: 'additional-details',
                element: <AdditionalDetailsForm />
            },
        ]
    },
    {
        path: 'form-layout',
        element: <FormLayout />,
        children: [
            {
                path: 'personal-details',
                element: <PersonalDetailsForm />
            },
            {
                path: 'experience',
                element: <ExperienceForm />
            },
            {
                path: 'education',
                element: <EducationForm />
            },
            {
                path: 'projects',
                element: <ProjectForm />
            },
            {
                path: 'skills',
                element: <SkillForm />
            },
            {
                path: 'additional-details',
                element: <AdditionalDetailsForm />
            },
        ]
    },
    {
        path: 'print-resume',
        element: <PrintResume />
    }

])
export default router
