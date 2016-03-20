describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('getDescendingNumbers function', function () {
        it(' should return descending numbers', function () {
            expect(app.getDescendingNumbers(10, 5)).toEqual("10 9 8 7 6 5");
            expect(app.getDescendingNumbers(20, 1)).toEqual("20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1");
        });
        it(' should return false when numberFrom > numberTo', function () {
            expect(app.getDescendingNumbers(3, 4)).toEqual(false)
        });
        it(' should return false when numberFrom = numberTo', function () {
            expect(app.getDescendingNumbers(3, 3)).toEqual(false)
        });
        it(' should return false when numberFrom = "a"', function () {
            expect(app.getDescendingNumbers('a', 3)).toEqual(false)
        });
        it(' should return false when numberTo = "a"', function () {
            expect(app.getDescendingNumbers(3, 'a')).toEqual(false)
        });
    });
    describe('areaOfTrapezoid function', function () {
        it(' should return false when any of arguments < 0', function () {
            expect(app.areaOfTrapezoid(-1, 5, 3)).toEqual(false);
            expect(app.areaOfTrapezoid(1, -1, 3)).toEqual(false);
            expect(app.areaOfTrapezoid(1, 5, -1)).toEqual(false);
        });

        it(' should return false when any of arguments has diffrent type than number', function () {
            expect(app.areaOfTrapezoid('a', 3, 4)).toEqual(false);
            expect(app.areaOfTrapezoid(3, 'a', 4)).toEqual(false);
            expect(app.areaOfTrapezoid(3, 4, 'a')).toEqual(false);
        });
        it(' should return area of trapezoid', function () {
            expect(app.areaOfTrapezoid(4, 4, 2)).toEqual(8);
            expect(app.areaOfTrapezoid(10, 10, 10)).toEqual(100);
            expect(app.areaOfTrapezoid(13.7, 15.5, 21.8)).toBeCloseTo(318.28);
            expect(app.areaOfTrapezoid(13.7, 15, 21.8)).toBeCloseTo(312.83);
        });
    });
    describe('maxarray function', function () {
        it(' should return max number from array', function () {
            expect(app.maxArray([2,5,8])).toEqual(8);
            expect(app.maxArray([7,6,3])).toEqual(7)
            });
        it(' should return false when array contain non-numbers', function () {
            expect(app.maxArray(['a','b','c'])).toEqual(false);
            expect(app.maxArray([3,5,false])).toEqual(false)
            });
    });
    describe('squareOdd function', function () {
        it(' should return array of squared odd numbers and unchanged even numbers of passed array', function () {
            expect(app.squareOdd([4,9,10])).toEqual([4,81,10]);
            expect(app.squareOdd([7,8,3])).toEqual([49,8,9])
        });
        it(' should return array with unchanged even numbers and strings of passed array', function () {
            expect(app.squareOdd(['a','b','c'])).toEqual(['a','b','c']);
            expect(app.squareOdd([2,4,8])).toEqual([2,4,8]);
            expect(app.squareOdd([6,8,10])).toEqual([6,8,10]);
        });
        it(' should return false when arguments are diffrent than number and string', function () {
            expect(app.squareOdd(true,false,'string')).toEqual(false);
            expect(app.squareOdd([1],2,'string')).toEqual(false);
        });
    });
});
