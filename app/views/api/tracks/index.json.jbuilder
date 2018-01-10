# render the show partial
json.array! @tracks do |track|
  json.partial! "api/track", track: track
end
