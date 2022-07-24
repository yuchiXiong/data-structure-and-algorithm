# @param {Integer} day
# @param {Integer} month
# @param {Integer} year
# @return {String}
def day_of_the_week(d, m, y)
  if m < 3
    y -= 1
    m += 12
  end

  c = y / 100
  y = y % 100

  %w[Sunday Monday Tuesday Wednesday Thursday Friday
     Saturday][(y + y / 4 + c / 4 - 2 * c + (26 * (m + 1) / 10) + d - 1 + 210) % 7]
end
