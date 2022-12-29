# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @param {Integer[]} nums3
# @return {Integer[]}
def two_out_of_three(nums1, nums2, nums3)
    Array(Set.new(Array(nums1 & nums2) + Array(nums2 & nums3) + Array(nums3 & nums1)))
end