A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

class Solution { public int solution(int X, int Y, int D); }

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

X = 10
Y = 85
D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

<hr/>
<br/>

X: 현재 위치<br/>
Y: 도착지<br/>
D: 일정하게 점프하는 거리<br/>

3개의 인자가 주어졌을 때, 개구리가 X에서 Y로 가려면 몇 번 D를 해야하는가를 구하는 문제입니다.
만약, X: 10, Y: 100, D: 30 이라고 할 때, 3번 점프하면 되므로 3을 반환하면 됩니다!
