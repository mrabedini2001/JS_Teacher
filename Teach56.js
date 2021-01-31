// JavaScript Bitwise Operators

AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

5 & 1	1	0101 & 0001	 0001
5 | 1	5	0101 | 0001	 0101
~ 5	10	 ~0101	 1010
5 << 1	10	0101 << 1	 1010
5 ^ 1	4	0101 ^ 0001	 0100
5 >> 1	2	0101 >> 1	 0010
5 >>> 1	2	0101 >>> 1	 0010

0 & 0	0
0 & 1	0
1 & 0	0
1 & 1	1

1111 & 0000	0000
1111 & 0001	0001
1111 & 0010	0010
1111 & 0100	0100

0 | 0	0
0 | 1	1 
1 | 0	1
1 | 1	1

0 ^ 0	0
0 ^ 1	1 
1 ^ 0	1
1 ^ 1	0 

Decimal	Binary
5	00000000000000000000000000000101
1	00000000000000000000000000000001
5 & 1	00000000000000000000000000000001 (1)

Binary Representation	Decimal value
00000000000000000000000000000001	1
00000000000000000000000000000010	2
00000000000000000000000000000100	4
00000000000000000000000000001000	8
00000000000000000000000000010000	16
00000000000000000000000000100000	32
00000000000000000000000001000000	64