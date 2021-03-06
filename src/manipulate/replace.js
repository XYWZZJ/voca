import coerceToString from 'helper/string/coerce_to_string';

/**
 * Replaces the matches of `search` with `replace`. <br/>
 *
 * @function replace
 * @static
 * @since 1.0.0
 * @memberOf Manipulate
 * @param {string} [subject=''] The string to verify.
 * @param {string|RegExp} search The search pattern to replace. If `search` is a string,
 * a simple string match is evaluated and only the first occurrence replaced.
 * @param {string|Function} replace The string or function which invocation result replaces `search` match.
 * @return {string} Returns the replacement result.
 * @example
 * v.replace('swan', 'wa', 'u');
 * // => 'sun'
 *
 * v.replace('domestic duck', /domestic\s/, '');
 * // => 'duck'
 *
 * v.replace('nice duck', /(nice)(duck)/, function(match, nice, duck) {
 *   return 'the ' + duck + ' is ' + nice;
 * });
 * // => 'the duck is nice'
 */
export default function replace(subject, search, replace) {
  const subjectString = coerceToString(subject);
  return subjectString.replace(search, replace);
}
