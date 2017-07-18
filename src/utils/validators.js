export function isValidEmail(email) {
	var re = /(.+)@(.+){2,}\.(.+){2,}/
  return re.test(email);
}