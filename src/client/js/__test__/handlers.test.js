/**
 * @jest-environment jsdom
 */

import formSubmit from '../handlers';

test('Confirms the function is defined.', () => {
    expect(formSubmit).toBeDefined();
})
