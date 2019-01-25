#Key press event

The wiimote sends it's button presses as 3 bytes everytime a button either gets pressed or
released. The first byte is always 30 in this case. The functions of the other bytes
are as follows:

- First 4 bits of byte 2:
  * if = 0? -> plus is not pressed
  * if = 1? -> plus is pressed
- Last 4 bits of byte 2:
  * if = 0? -> non of the d-pad pressed
  * if = 1? -> left d-pad pressed
  * if = 2? -> right d-pad pressed
  * if = 4? -> bottom d-pad pressed
  * if = 8? -> top d-pad pressed
  (following values are created by additions of the above values)
  * if = 5? -> left d-pad + bottom d-pad pressed.
  * if = 6? -> right d-pad + bottom d-pad pressed.
  * if = 9? -> left d-pad + top d-pad pressed.
  * if = 10? -> right d-pad + top d-pad pressed.
- First 4 bits of byte 3:
  * if = 0? -> neither home or minus pressed
  * if = 1? -> minus pressed
  * if = 8? -> home pressed
  (following value is the sum of the values above)
  * if = 9? -> home and minus pressed
- Last 4 bits of byte 3:
  * if = 0? -> neither 1, 2, a or b pressed
  * if = 1? -> 2 is pressed
  * if = 2? -> 1 is pressed
  * if = 4? -> b is pressed
  * if = 8? -> a is pressed
  (following values are creating by additions of the above values)
  * if = 3? -> 1 + 2 pressed
  * if = 5? -> 2 + b pressed
  * if = 6? -> 1 + b pressed
  * if = 7? -> 1 + 2 + b pressed
  * if = 9? -> 2 + a pressed
  * if = a? -> 1 + a pressed
  * if = b? -> 1 + 2 + a pressed
  * if = c? -> a + b pressed
  * if = d? -> 2 + a + b pressed
  * if = e? -> 1 + a + b pressed
  * if = f? -> 1 + 2 + a + b pressed