def Func(haystack,needle):

        ptr1 = 0
        ptr2 = 0

        tempStr = ""
        while ptr1 < len(haystack):
            if haystack[ptr1] == needle[ptr2]:
                tempStr += haystack[ptr1]
                if tempStr == needle:
                    return (ptr1 - (len(needle)-1))
                ptr2 += 1
            else:
                ptr1-=ptr2
                ptr2 = 0
                tempStr = ""
            ptr1+=1


haystack = "mississippi"
needle = "issip"
Func(haystack,needle)