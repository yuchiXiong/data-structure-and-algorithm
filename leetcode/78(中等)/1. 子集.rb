# @param {Integer[]} nums
# @return {Integer[][]}
def subsets(nums)
  (0..(2 ** nums.size - 1))
      .map { |x| x.to_s(2).rjust(nums.size, '0') }
      .map do |x|
          x.split('')
          .enum_for(:each_with_index)
          .to_a
          .map { |char, index| char.eql?('0') ? -1 : index }
          .map do |index|
              index.eql?(-1) ? '' : nums[index]
          end
          .select { |x| x != '' }
      end
      .to_a
end