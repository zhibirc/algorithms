def test_main():
    assert findNextBracketSequence('()(())') == '()()()', 'Should be "()()()"'
    assert findNextBracketSequence('()()()') == 'no solution', 'Should be "no solution"'

if __name__ == '__main__':
    test_main()
    print('Tests passed')