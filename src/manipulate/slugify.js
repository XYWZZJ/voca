import toString from '../utils/string/to_string';
import nilDefault from '../utils/undefined/nil_default';
import kebabCase from '../case/kebab_case';
import latinise from '../manipulate/latinise';
import { REGEXP_NON_LATIN } from '../utils/regexp.js';

/**
 * Slugify the `subject`. Cleans the `subject` by replacing diacritics with corresponding latin characters.
 *
 * @function slugify
 * @static
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to slugify.
 * @return {string} The slugified string.
 * @example
 * v.slugify('Italian cappuccino drink');
 * // => 'italian-cappuccino-drink'
 *
 * v.slugify('café latté');
 * // => 'caffe-latte'
 */
export default function(subject) {
  var subjectString = toString(nilDefault(subject, ''));
  if (subjectString === '') {
    return '';
  }
  var cleanSubjectString = latinise(subjectString).replace(REGEXP_NON_LATIN, '-');
  return kebabCase(cleanSubjectString);
}