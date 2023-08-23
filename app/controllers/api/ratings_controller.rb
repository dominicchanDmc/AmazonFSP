class Api::RatingsController < ApplicationController
    def index
        @ratings = Rating.all.sort { |a,b| b.created_at <=> a.created_at }
    end
end
