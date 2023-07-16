# Backtracking Algorithm for Sudoku

def solve(board):
    empty_cells = []
    allowed_values = dict()
    k = 0

    for i in range(81):
        x = i % 9;
        y = (i - x) // 9
        if board[x][y] == 0:
            k += 1
            empty_cells.append((x, y))
            allowed_values[(x, y)] = get_allowed(board, x, y)
                
    _solve(board, empty_cells, allowed_values, k)

    return board
    
def _solve(board, empty_cells, allowed_values, k):
    if k == 0:
        return True

    row, col = empty_cells[k - 1]

    for n in allowed_values[(row, col)]:
        if is_ok(board, row, col, n):
            board[row][col] = n
            k -= 1

            if _solve(board, empty_cells, allowed_values, k):
                return True

            board[row][col] = 0
            k += 1
            
    return False

def get_allowed(board, row, col):
    hset = set()

    for n in range(1, 10):
        found = False

        if n in board[row]:
            found = True
            continue
        else:
            for i in range(9):
                if board[i][col] == n:
                    found = True
                    break

        if found == True:
            continue
        else:
            startX = row // 3 * 3
            startY = col // 3 * 3

            for x in range(startX, startX + 3):
                for y in range(startY, startY + 3):
                    if n == board[x][y]:
                        found = True
                        break

        if found == False:
            hset.add(n)

    return hset

def is_ok(board, row, col, n):
    # check row
    if n in board[row]:
        return False
    
    # check column
    for x in range(9):
        if n == board[x][col]:
            return False
    
    # check boxes
    startX = row // 3 * 3
    startY = col // 3 * 3

    for x in range(startX, startX + 3):
        for y in range(startY, startY + 3):
            if n == board[x][y]:
                return False

    return True