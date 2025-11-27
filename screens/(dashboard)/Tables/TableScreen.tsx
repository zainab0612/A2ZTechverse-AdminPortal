import { AuthorsTable } from '@/components/tables/AuthorTable'
import { ProjectTable } from '@/components/tables/ProjectTable'
import React from 'react'

export const TableScreen = () => {
    return (
        <>
            <main className='px-6 pb-6 flex flex-col gap-5'>
                <AuthorsTable />
                <ProjectTable variant='outer' showMembers={false} actions={true} menu={false} status={true} description={false} />
            </main>
        </>
    )
}
