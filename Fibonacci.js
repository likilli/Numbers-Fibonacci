

//1 2 3 5 8 13 21
//1 2 3 4 5 6  7 
6..fibo//13

'use strict'

Object.defineProperty(Number.prototype, "fibo",
{
	get: function(num)
	{
		var a = b = 1
        i = 2 
        sum = 0
        arr = []

        if (num > 2)
            while (i < num+1)
            {
                sum = b + a
                a = b
                b = sum
                arr.push(sum)
                i ++
            }
        return arr.pop()
        
    }
})
//////////

function fibo(num)
{
     var fib = 0
     if (num > 2) 
     	while (fib < num) return fibo( num - 1) + fibo(num - 2)
     	return 1
}
////////

function fibo(num)
{
	if ( num > 2) return fibo( num - 1) + fibo(num - 2)
	    return 1
}
////////

function fibo(num)
{
    var a = b = 1
        i = 2 
        sum = 0
        arr = []

    while (i < num+1)
    {
        sum = b + a
        a = b
        b = sum
        arr.push(sum)
        i ++
    }
    return arr.pop()
}