const hero = {
    name: 'hero',
    title: 'Heros',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }, // uses the name field and slugify it
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
        },
        {
            name: 'weight',
            title: 'Variant Weight',
            type: 'number'
        }
        
    ]
}

export default hero;