#!/usr/bin/env lua

for i=99, 2, -1 do
	print(i .. " bottles of beer on the wall, " .. i .. " bottles of beer.\nTake one down, pass it around, " .. (i-1).. " bottles of beer on the wall.\n")
end

print("1 bottle of beer on the wall, 1 bottle of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
