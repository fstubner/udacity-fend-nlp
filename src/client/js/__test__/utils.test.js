/**
 * @jest-environment jsdom
 */

import validateUrl from '../utils';

test('Validates a valid URL', () => {
    expect(validateUrl("https://www.google.com")).toBe(true);
})

test('Validates an invalid URL', () => {
    expect(validateUrl("This is totally not a URL")).toBe(false);
})