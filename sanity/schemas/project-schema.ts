import { Rule } from "sanity";

const project = {
    name: 'project',
    title: 'Projects',
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
            name: 'varianta',
            title: 'Variant A',
            type: 'reference',
            to: [{ type: 'hero' }],
            weak: false,
            description: 'Choose a hero variation for A/B testing'
        },
        {
            name: 'weighta',
            title: 'Variation A weight',
            type: 'number',
            description: 'Weight of variation A for A/B tests from 1-100.',
            initialValue: 50,
            validation: (rule: Rule) => [  // validation to allow minimum of 1 and max of 100
                rule.required().min(1).error('Must be at least 1'),
                rule.max(100).error('Cannot be greater than 100'),
            ]
        },
        {
            name: 'variantb',
            title: 'Variant B',
            type: 'reference',
            to: [{ type: 'hero' }],
            weak: false,
            description: 'Choose a hero variation for A/B testing'
        },
        {
            name: 'weightb',
            title: 'Variation B weight',
            type: 'number',
            description: 'Weight of variation B for A/B tests from 1-100.',
            initialValue: 50,
            // set a rule that ensures the value of weightA and weightB is equal to 100
            validation: (rule: Rule) => rule.required().custom((value: number, context: any) => {
                // need to use context to go up a parent and then grab the value of weighta
                const weightA = context.parent.weighta;
                
                if((weightA + value) != 100) {
                    return 'This value must equal to 100 from weight of variation A'
                }
                if((weightA + value) == 100) {
                    return true
                }
            }).error('This value must equal to 100 from weight of variation A')
            
        }
        // {
        //     name: 'image',
        //     title: 'Image',
        //     type: 'image',
        //     options: { hotspot: true },
        //     fields: [
        //         {
        //             name: 'alt',
        //             title: 'Alt',
        //             type: 'string',
        //         }
        //     ]
        // },
        // {
        //     name: 'url',
        //     title: 'URL',
        //     type: 'url',
        // },
        // {
        //     name: 'content',
        //     title: 'Content',
        //     type: 'array',
        //     of: [{ type: 'block' }], // WYSWG editor type
        // }
    ]
}

export default project;