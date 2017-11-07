function foo(x) {
	y++;
	z = x * y;
}

function Foo(curX, curY) {
  var [origY, origZ] = [y, z]
  y = curY
  foo(curX, y)
  var [newY, newZ] = [y, z]
  [y, z] = [origY, origZ]
  return [newY, newZ]
}

var y = 5, z;

foo(20);
z;		// 120

foo(25);
z;		// 175
