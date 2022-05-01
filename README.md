## Kaprekars Number

#### 01 May 2022

## Description
6174 is known as Kaprekar's constant after the Indian mathematician D. R. Kaprekar. This number is notable for the following rule:
```
1. Take any four-digit number, using at least two different digits. (Leading zeros are allowed.)
2. Arrange the digits in descending and then in ascending order to get two four-digit numbers, adding leading zeros if necessary.
3. Subtract the smaller number from the bigger number.
4. Go back to step 2 and repeat.
5. Take any four-digit number, using at least two different digits. (Leading zeros are allowed.)
6. Arrange the digits in descending and then in ascending order to get two four-digit numbers, adding leading zeros if necessary.
7. Subtract the smaller number from the bigger number.
Go back to step 2 and repeat.
```
The above process, known as Kaprekar's routine, will always reach its fixed point, 6174, in at most 7 iterations. Once 6174 is reached, the process will continue yielding 6174 for eternity!.For example, choose 3524:
```
5432 – 2345 = 3087
8730 – 0378 = 8352
8532 – 2358 = 6174
7641 – 1467 = 6174

```

### User Stories
```
1. A user gives a four digit number.
2. A user gets to see how 6174 is obtained from the given number.

```
## Technologies Used
```
1.HTML
2. CSS
3. JavaScript

```
## Application link
click [here](https://nomadicshiv.github.io/kaprekar-magical-number-in-javascript/)


## Known bugs
:laughing::laughing::laughing: whooo!! This code right here :laughing::laughing: call me an illusionist, because there is no way this code gives the correct answers without tricks that can stupify even the blind. 
1. Doesnt auto fill a zero if the fourth input field is ignored.
2. Gives a NaN error if an input is ignored. Try number 375
3. The major bug is when a number gives 5 steps to obtain 6174 and the machine madness begins. Try number 3139. 
## Support and contact details
Feel free to reach me at karonjekevin67@gmail.com
## License
The project is under the [MIT](https://github.com/nomadicshiv/kaprekar-magical-number-in-javascript/blob/main/LICENSE) licence
Copyright (c) 2022 **Nomadic Shiv**
