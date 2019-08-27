import { storiesOf } from '@storybook/vue';
//import { action } from '@storybook/addon-actions';

import Question from '../../src/components/Question';

export const questionProps = {
    id: '1',
    //value: '',
    isDirty: false,
    isValid: undefined
};

const template = '<Question :id="id" :isDirty="isDirty" :isValid="isValid"></Question>'

storiesOf('Question', module)
    .add('default', () => {
        return {
            components: { Question },
            template: template,
            data: () => ({ ...questionProps })
        };
    })
    .add('invalid', () => {
        return {
            components: { Question },
            template: template,
            data: () => ({ ...questionProps, isDirty: true, isValid: false } )
            //data: () => ({id: 1, isDirty: true, isValid: false})
        };
    });